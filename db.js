import {MongoClient} from 'mongodb';

const uri = 'mongodb+srv://cardstats:zcFvA9kySIbbeqIv@cluster0.q4ptvmp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function connectDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    return client.db('CardStatus')
  } catch (error) {
    console.error('Error connecting to MongoDB:');
    throw error;
  }
}

export default connectDatabase;
