// importData.js

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import connectDatabase from './db.js';
import csvtojson from 'csvtojson';

async function importData() {
    try {
      const db = await connectDatabase();
      const dataFolder = path.join('C:/Users/MSI/Desktop/r/back', 'data');
  
      fs.readdirSync(dataFolder).forEach(async (file) => {
        const collectionName = path.parse(file).name;
  
        const collection = db.collection(collectionName.replace(/ /g, '_')); // Replace spaces with underscores
  
        const csvFilePath = path.join(dataFolder, file);
        const jsonArray = await csvtojson().fromFile(csvFilePath);
        await collection.deleteMany({}); // Clear existing data
        await collection.insertMany(jsonArray);
        console.log(`Data imported into ${collectionName} collection`);
      });
    } catch (error) {
      console.error('Error importing data:', error);
    } 
  }

export default importData;
