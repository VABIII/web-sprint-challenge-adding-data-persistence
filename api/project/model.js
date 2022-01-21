const db = require('../../data/dbConfig');

const getAllProj = async () => {
    const projects = await  db('projects')
    console.log(projects)

    return projects.map(proj => {
        if(proj.project_completed === 0){
            return {
                project_id: proj.project_id,
                project_name: proj.project_name,
                project_description: proj.project_description,
                project_completed: false
            }
        } else {
            return {
                project_id: proj.project_id,
                project_name: proj.project_name,
                project_description: proj.project_description,
                project_completed: true
            }
        }
    })
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





























