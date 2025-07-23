import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const ToDo = mongoose.model("ToDo", TodoSchema)

export { ToDo }