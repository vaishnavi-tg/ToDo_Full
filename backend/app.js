import express from "express"
import { config } from "dotenv"

config()

const app = express()

try {
    app.listen(process.env.PORT, () => {
        console.log(`Server runnning on port ${process.env.PORT}`)
    })
} catch (error) {
    console.log(error)
}

export default app