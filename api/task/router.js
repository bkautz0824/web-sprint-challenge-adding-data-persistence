const express = require('express');
const Task = require('./model')
const {validateId} = require('./middleware')


const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.status(200).json(tasks)
})

router.post('/', validateId, async (req, res) => {
    try{
        const task = req.body;
        
        if(!task.task_description || !task.project_id){
            res.status(404).json({ message: 'missing information'})
        } 
        else{
            const newTask = await Task.insert(task)
            res.status(200).json(newTask)
        }
        
        
        
    } catch(err){
        res.status(404)
    }
})


module.exports = router
