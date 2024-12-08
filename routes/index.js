const routes = require('express').Router()
const invitationController = require('../controllers/InvitationController')

routes.get('/api/', (req, res) => {
    res.json({msg: 'hello world'})
})

routes.post('/api/invitations', invitationController.create)
routes.get('/api/invitations', invitationController.getList)
// routes.patch('/api/invitations', invitationController.update)
// routes.delete('/api/invitations/:id', invitationController.delete)

module.exports = routes