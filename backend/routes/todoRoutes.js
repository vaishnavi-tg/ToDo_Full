import { Router } from "express";

const router = Router()

router.post("/todo",createTodo)

router.get("/todos",getTodo)

router.put("/completed",markTodo)

export {router}