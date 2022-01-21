const router = require('express').Router();
const Project = require('./model');


router.get('/', (req, res, next) => {
    Project.getAllProj()
        .then(proj => {
            res.json(proj)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {

    Project.create(req.body)
        .then(newProj => {
            if(newProj.project_completed === 0) {
                res.json({
                    project_name: newProj.project_name,
                    project_description: newProj.project_description,
                    project_id: newProj.project_id,
                    project_completed: false
                })
            } else {
                res.json({
                    project_name: newProj.project_name,
                    project_description: newProj.project_description,
                    project_id: newProj.project_id,
                    project_completed: true
                })
            }

            res.status(201).json(newProj)
        })
        .catch(next);
});














module.exports = router;






























