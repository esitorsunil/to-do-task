import express from "express"

import Todo from "../models/todo.models"

const router = express.Router()

router.get("/", async(req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//add a new todo

router.post("/", async(req,res) => {
    const todos = new Todo({
        text: req.body.text
    })

    try {
        const newTodo = await todos.save()
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// update a todo

router.patch("/:id", async (req, res) => {

    try {
        
   
    const todos = new Todo.findById(req.params.id)

    if(!todos) return res.status(404).json({message: "Todo not found"})

    if(req.body.text !== undefined) {
        todos.text = req.body.text
    }

    if(req.body.completed !== undefined) {
        todos.text = req.body.completed
    }

    const updatedTodo = await todos.save()
    res.json(updatedTodo)
          
    } catch (error) {
        res.status(400).json({message: error.message})
     }
    
})

//delete api

router.delete("/:id", async (res, req) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.json({message: "Todo is deleted"})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default router;