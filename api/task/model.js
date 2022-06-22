const db = require('../../data/dbConfig')

const find = () => {
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
        't.task_description',
        't.task_notes',
        't.task_completed',
        'p.project_name',
        'p.project_description'
        )
    .then(tasks => tasks.map(t => ({
            ...t, task_completed: t.task_completed ? true : false
        })))
    .catch(err => console.log(err.message))
}

const insert = (task) => {
    return db('tasks as t').insert(task)
    .then(([task_id]) => db('tasks').where({ task_id }))
    .then(tasks => tasks.map(t => ({
        ...t, task_completed: t.task_completed ? true : false
    })))
    .then(task => task[0])
    .catch(err => console.log(err))
    
}


module.exports = {
    find, insert
}
