import { ToDo } from "../models/todoModel.js"
import { createTodo, updateTodo } from "../types.js"

const CreateTodo = async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Incorrect Inputs"
        })
    }
    await ToDo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Successfully created the Todo"
    })
}

const GetTodo = async (req, res) => {
    const todos = await ToDo.find({})
    return res.json({
        todos
    })
}

const UpdateTodo = async (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "Incorrect Inputs"
        })
    }
    await ToDo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
}

export { CreateTodo, GetTodo, UpdateTodo }