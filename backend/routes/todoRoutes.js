import { Router } from "express";
import { CreateTodo, GetTodo, UpdateTodo } from "../controllers/todoController.js";

const router = Router()

router.post("/todo", CreateTodo)

router.get("/todos", GetTodo)

router.put("/completed", UpdateTodo)

export { router }