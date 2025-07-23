import mongoose from "mongoose";
import {config} from "dotenv"

config()

const dbConnect = ()=>{
try {
    const connectToDb = mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to ToDo DB")
})
} catch (error) {
    console.log(error)
}
}

export {dbConnect}
