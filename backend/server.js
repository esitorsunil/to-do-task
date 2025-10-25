import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import todoRoutes from "./routes/todo.routes.js"
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/todo", todoRoutes)


app.listen(5000, () => {
    connectDb();
    console.log("Server established successfully at http://localhost:5000")
})