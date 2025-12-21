import mongoose from "mongoose";
import { DB_NAME } from "../src/constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        return connectionInstance;
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        throw error;
    }
}

export default connectDB;

