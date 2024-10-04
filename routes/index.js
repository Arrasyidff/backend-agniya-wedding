const routes = require('express').Router()
const invitationController = require('../controllers/InvitationController')
const guestController = require('../controllers/GuestController')

routes.post('/api/invitations', invitationController.create)
routes.get('/api/invitations', invitationController.getList)
routes.get('/api/invitations/:id', invitationController.get)
routes.patch('/api/invitations', invitationController.update)
routes.delete('/api/invitations/:id', invitationController.delete)

routes.post('/api/guests', guestController.create)
routes.get('/api/guests', guestController.getList)
routes.get('/api/guests/:id', guestController.get)
routes.patch('/api/guests', guestController.update)
routes.delete('/api/guests/:id', guestController.delete)

module.exports = routes