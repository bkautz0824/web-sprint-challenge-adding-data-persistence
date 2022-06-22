const express = require('express');
const Resource = require('./model')

const router = express.Router();


router.get('/', async (req, res) => {
    try{
        const resources = await Resource.findResources()
        if(resources){
            res.status(200).json(resources)
        }
        
    } catch(err){
        res.status(404).json({message: err.message})
    }
    
})

router.post('/', async (req, res) => {
    try{
        const resource = req.body
        
        const newResource = await Resource.insert(resource)
        res.json(newResource)
    }catch(err){
        res.status(404).json({message: err.message})
    }
})


module.exports = router;
