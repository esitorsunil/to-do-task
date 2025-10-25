import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
}, 
{timeshamp: true}
);

const todo = mongoose.model("Todos", todoSchema)

export default todo;
