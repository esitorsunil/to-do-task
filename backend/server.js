import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
dotenv.config();

const app = express();


app.get("/", (req, res) => {
    res.send("Server is running")
} )

app.listen(5000, () => {
    connectDb();
    console.log("Server established successfully at http://localhost:5000")
})