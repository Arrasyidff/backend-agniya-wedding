const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.json('Hello World')
})

module.exports = routes