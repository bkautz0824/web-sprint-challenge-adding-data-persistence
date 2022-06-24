const express = require('express');
const Resource = require('./model')
const { validateName} = require('./middleware')
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



router.post('/', validateName, async (req, res) => {
    try{
        
        const newResource = await Resource.insert(req.body)
        res.json(newResource)
    }catch(err){
        res.status(404).json({message: err.message})
    }
})


module.exports = router;
