const db = require('../../data/dbConfig');

const getAllProj = () => {
    return db('projects')

}


const create = newProj => {
    return db('projects')
        .insert(newProj)
        .then(([project_id]) => {
            console.log(project_id)
            return db('projects').where('project_id', project_id)
        })
}















module.exports = {
    getAllProj,
    create
}





























