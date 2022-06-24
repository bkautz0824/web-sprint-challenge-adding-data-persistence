const Resources = require('./model')

async function validateName(req, res, next) {
    try{
        const existingResources = await Resources.findResources()
        existingResources.some(resources => {
            if(resources.resource_name !== req.body.resource_name){
                res.status(200)
                return
            } else{
                res.status(400).json({message: 'no good'})
                return
                
            }
        })
        next()

    }catch(err){
        console.log(err)
    }
}

module.exports = {
    validateName
}