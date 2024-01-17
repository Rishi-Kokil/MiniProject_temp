import express from 'express';
import axios from 'axios';
import { config as dotenvConfig } from 'dotenv';
import cors from 'cors';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from 'dotenv';

//importing database connection , schemas and Models
import connection from "./Database/database.js";
import {User , Admin} from "./Database/models.js";
import { userSchema , adminSchema } from './Database/schema.js';

//Helper Function
import {generateToken , checkToken , hashCompare , hashData , multerConfig } from './Helpers/index.js';


const app = express();

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envPath = dirname(dirname(__dirname)) + '/.env'; // Adjust the path based on your project structure

// Load environment variables from the specified .env file
config({ path: envPath });


app.use(cors());
app.use(express.json());

const saltRounds = 4;  //inout for hashing functions

//Authentication
const secrect_admin_key = process.env.SECRECT_ADMIN_KEY;
const secrect_user_key = process.env.SECRECT_USER_KEY;


//custom middlewares
const adminAuth = async (req, res, next) => {
    const auth_header = req.headers.authorization;
    if (auth_header) {
        const token = auth_header.split(" ")[1];
        try {
            const result = await checkToken(token, secrect_admin_key);
            req.user = result;
            next();
        }
        catch (error) {
            res.status(403).send({ messaage: error.messaage });
        }

    }
    else {
        res.status(403).send({ messaage: "Auth Token Not present redirect to login at frontend" })
        //redirect to login
    }
}

const userAuth = async (req, res, next) => {
    const auth_header = req.headers.authorization;
    if (auth_header) {
        const token = auth_header.split(" ")[1];
        try {
            const result = await checkToken(token, secrect_user_key);
            req.user = result;
            next();
        }
        catch (error) {
            res.status(403).send({ messaage: error.messaage });
        }

    }
    else {
        res.status(403).send({ messaage: "Auth Token Not present redirect to login at frontend" })
        //redirect to login
    }
}


app.post("user/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username});
    if(user){
        res.status(401).send({messaage : "User already exists"})
    }
    else{
        
        try {
            const hashedPassword = await hashData(password , saltRounds);
            const newUser = userSchema({username , hashedPassword});
            await newUser.save();

            //generating token for authentication
            const token = generateToken({username , password} , secrect_user_key);
            res.send({messaage : "Logged in Successfully" , token})

        } catch (error) {
            res.status(401).send({messaage : "Invalid Password for hashing"})
        }

    }
});

 
app.post("user/signup", async (req, res) => {
    console.log("inside signup");
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user) {
            res.status(401).send({ message: "User already exists" })
        }
        else {
            await newUser.save()
            res.send({messaage : "Sigup Successfull"})
        }
    } catch (error){
        res.status(401).send({messaage : error.messaage});
    }
    
})

//end points for connecting to the AI model
app.post("user/detection/upload", userAuth ,(req, res, next) => {
    //request to the model endpoint
});


app.listen(5000, () => {
    console.log("User Server Listening on 5000");
})