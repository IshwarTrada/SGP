import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import express from "express";
const app = express();

const connectDB = async () => {
  try {
    const connInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDb connected !! DB Host : ${connInstance.connection.host}`);
  } catch (error) {
    console.error("Error while connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;