
import mongoose from 'mongoose';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '../../.env' });


//mongoose setup
const databaseURL = process.env.DATABASE_URL;
mongoose.connect(databaseURL);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection established successfully');
});

export default connection;
