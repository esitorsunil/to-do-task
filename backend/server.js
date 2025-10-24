import express from "express";

const app = express();

app.listen(5000, () => {
    console.log("Server establish successfully at http://localhost:5000")
})