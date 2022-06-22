const db = require('../../data/dbConfig')

const find = () => {
    
    return db('projects')
    .then(projects => projects.map(proj => ({
        ...proj, project_completed: proj.project_completed ? true : false
    })))
    .catch(err => console.log(err.message))
}



const insert = (project) => {
    return db('projects').insert(project)
    .then(([project_id]) => db('projects').where({ project_id }))
    .then(projects => projects.map(proj => ({
        ...proj, project_completed: proj.project_completed ? true : false
    })))
    .then(projects => projects.map(proj => ({
        ...proj, project_description: "" ? null : proj.project_description
    })))
    .then(projects => projects[0])
    .catch(err => console.log(err.message))
    
}



module.exports = {
    find, insert, 
}