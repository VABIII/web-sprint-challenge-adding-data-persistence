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
            res.status(201).json(newProj)
        })
        .catch(next);
});














module.exports = router;






























