import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from 'dotenv';
import mongoose from 'mongoose';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = dirname(dirname(__dirname)) + '/.env'; // Adjust the path based on your project structure

// Load environment variables from the specified .env file
config({ path: envPath });

//mongoose setup
const databaseURL = process.env.DATABASE_URL;
console.log(envPath);
console.log(databaseURL);

mongoose.connect(databaseURL);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection established successfully');
});

export default connection;
