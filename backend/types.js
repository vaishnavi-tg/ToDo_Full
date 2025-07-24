import zod from "zod"

const createTodo = zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1)
})

const updateTodo = zod.object({
    id: zod.string(),
    completed: zod.boolean()
})

export { createTodo, updateTodo }