const db = require('../../data/dbConfig')

const findResources = () => {
    return db('resources')
}



const insert = (resource) => {
    return db('resources').insert(resource)
    .then(([resource_id]) => db('resources').where({ resource_id}))
    .then(resource => resource[0])
    .catch(err => console.log(err.message))
}



module.exports = {
    findResources, insert,
}
