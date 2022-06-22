const express = require('express');
const Task = require('./model')
const Projects  = require('../project/model')


const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
})

router.post('/', async (req, res) => {
    try{
        const task = req.body;
        const newTask = await Task.insert(task)
        if(!task.task_description || !task.project_id){
            res.status(400).json({ message: 'missing information'})
        }
        else{
            res.status(200).json(newTask)
        }
        
        
        
    } catch(err){
        res.status(404).json({messge: err.message})
    }
})


module.exports = router
