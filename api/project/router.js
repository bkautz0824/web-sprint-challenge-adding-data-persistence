const express = require('express');
const Project = require('./model')

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const projects = await Project.find()
        res.status(200).json(projects)
    } catch(err){
        res.status(404).json({message: err.message})
    }
    
})


router.post('/', async (req, res) => {
    try{
        const project = req.body
        const newProject = await Project.insert(project)
       if(project.project_name){
        res.status(200).json(newProject)
       } else{
           res.status(400).json({message: 'Project name missing'})
       }
        
            
    
    } catch(err){
        res.status(404).json({message: err.message}) 
    }
})


module.exports = router;
