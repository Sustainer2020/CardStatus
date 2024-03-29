// watcher.js

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import connectDatabase from './db.js';

async function watchDataFolder() {
  try {
    const db = await connectDatabase();
    const dataFolder = path.join('C:/Users/MSI/Desktop/r/Zywa Assignment', 'data');

    fs.watch(dataFolder, async (eventType, filename) => {
      console.log(`File ${filename} has been ${eventType}`);
      const collectionName = path.parse(filename).name;

      // Read data from CSV file
      const data = [];
      fs.createReadStream(path.join(dataFolder, filename))
        .pipe(csv())
        .on('data', (row) => {
          data.push(row);
        })
        .on('end', async () => {
          // Update data in MongoDB collection
          const collection = db.collection(collectionName);
          await collection.deleteMany({}); // Clear existing data
          await collection.insertMany(data);
          console.log(`Data updated in ${collectionName} collection`);
        });
    });
  } catch (error) {
    console.error('Error watching data folder:', error);
  }
}

export  {watchDataFolder};
