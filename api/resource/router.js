const router = require('express').Router();
const Resources = require('./model');

router.post('/', (req, res, next) => {
    Resources.create(req.body)
        .then(newRes => {
            res.status(201).json(newRes)
        })
        .catch(next)
});

router.get('/', (req, res, next) => {
    Resources.getAllResources()
        .then(resp => {
            res.json(resp)
        })
        .catch(next)
});






module.exports = router;










































