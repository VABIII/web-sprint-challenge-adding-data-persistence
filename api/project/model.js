const db = require('../../data/dbConfig');

const getAllProj = () => {
    return db('projects')

}


const create = newProj => {
    return  db('projects')
        .insert(newProj)
        .then(([project_id]) => {
            return  db('projects').where('project_id', project_id).first()

        })
}















module.exports = {
    getAllProj,
    create
}





























