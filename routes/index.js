const routes = require('express').Router()
const invitationController = require('../controllers/InvitationController')

routes.post('/api/invitations', invitationController.create)
routes.get('/api/invitations', invitationController.getList)
routes.get('/api/invitations/:id', invitationController.get)
routes.patch('/api/invitations', invitationController.update)
routes.delete('/api/invitations/:id', invitationController.delete)

module.exports = routes