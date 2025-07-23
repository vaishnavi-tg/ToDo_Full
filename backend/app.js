import express from "express"
import cors from "cors"
import { config } from "dotenv"
import { router } from "./routes/todoRoutes.js"

config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1/todo", router)

try {
    app.listen(process.env.PORT, () => {
        console.log(`Server runnning on port ${process.env.PORT}`)
    })
} catch (error) {
    console.log(error)
}

export default app