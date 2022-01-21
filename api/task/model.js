const db = require('../../data/dbConfig')

const getAllTask = () => {
    return db('tasks');
};

const create = async newTask => {
    return db('tasks')
        .insert(newTask)
        .then(([resource_id]) => {
            console.log(resource_id)
            return db('tasks').where('task_id', resource_id)
        })

}

















module.exports = {
    getAllTask,
    create
}






















