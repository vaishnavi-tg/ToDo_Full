import mongoose from "mongoose";
import { config } from "dotenv"

config()

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to ToDo DB")
    } catch (error) {
        console.log(error)
    }
}

export { dbConnect }
