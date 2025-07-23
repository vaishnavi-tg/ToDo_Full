import { ToDo } from "../models/todoModel.js"
import { createTodo } from "../types.js"

const CreateTodo = async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.sucess) {
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

const GetTodo = async () => {
    const todos = await ToDo.find({})

    res.json({
        todos
    })
}

const UpdateTodo = async () => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if (!parsedPayload.sucess) {
        return res.status(411).json({
            msg: "Incorrect Inputs"
        })
    }
    await ToDo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg  : "Todo marked as completed"
    })
}

export { CreateTodo, GetTodo, UpdateTodo }