import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
});


export { userSchema, adminSchema };