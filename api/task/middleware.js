const Projects = require('../project/model')

async function validateId(req, res, next) {
    try{
        const exisitingProjects = await Projects.find()
        const checkResultArray = [];
        exisitingProjects.forEach((projects, i) => {
            if(projects.project_id === req.body.project_id){
                checkResultArray.push(i)
            }
            return
        })
        
        if(checkResultArray.length < 1){
            return res.status(400).json({message: 'no good'})
        }
        
     
    next()
        
        
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    validateId
}