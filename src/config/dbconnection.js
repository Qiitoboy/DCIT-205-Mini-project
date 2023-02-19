

import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

mongoose.set("strictQuery", false);

const MONGO_URI = 'mongodb+srv://Ransfordtakyi149:August52003@cluster0.qrtgoun.mongodb.net/?retryWrites=true&w=majority'

const DBCONNECT = async () => {
    try {
        await mongoose.connect (MONGO_URI, {autoIndex: true});
        console.log("db connected Succesfully");
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

 export default DBCONNECT;