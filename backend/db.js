import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.MONGODB_URI
import mongoose from "mongoose"

const main = () => {
    mongoose.connect(connectionString)
    .then(() => {console.log(`Connection Successful`)})
    .catch((err) => {console.log('Error connect mongodb')})
}


export default main;