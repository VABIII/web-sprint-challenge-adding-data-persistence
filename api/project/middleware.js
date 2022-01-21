const Projects = require('./model')

const checkBody = (req, res, next) => {
    console.log(req.body)
    next()

};


module.exports = {
    checkBody
}
















































