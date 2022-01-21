const db = require('../../data/dbConfig')

const getAllTask = () => {
    return db('tasks');
};

const create = async newTask => {
    const { project_id } = newTask

    const taskId = await db('tasks').insert(newTask)
    const task =  await db('tasks').where('task_id', taskId).first()
    const project = await db('projects'). where('project_id', project_id).first()

    const result = {
        task_id: task.task_id,
        task_description: task.task_description,
        task_notes: task.task_notes,
        task_completed: task.task_completed,
        project_name: project.project_name,
        project_description: project.project_description
    }
    console.log(project)
    return result

}

module.exports = {
    getAllTask,
    create
}






















