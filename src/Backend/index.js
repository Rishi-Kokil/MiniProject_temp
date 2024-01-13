import express from 'express';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import axios from 'axios';
import multerConfig from "./multerConfig.js";
import mongoose from 'mongoose';
import { config as dotenvConfig } from 'dotenv';
import cors from 'cors';

//importing database connection and schemas 
import connection from './database.js';
import { userSchema, adminSchema } from "./schema.js";

const app = express();
dotenvConfig({ path: '../../.env' });

// app.use(express.json());
app.use(express.static("/assests"));
app.use(cors());

//------mongoose connection


//Authentication
const secrect_admin_key = process.env.SECRECT_ADMIN_KEY;
const secrect_user_key = process.env.SECRECT_USER_KEY;


//end points for connecting to the AI model
app.post("/detection/upload", (req, res, next) =>{});


app.listen(5000, () => {
    console.log("Listening on port 5000");
})