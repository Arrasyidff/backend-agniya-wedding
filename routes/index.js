const routes = require('express').Router()
const invitationController = require('../controllers/InvitationController')
const guestController = require('../controllers/GuestController')
const wishController = require('../controllers/WishController')

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

routes.post('/api/guest_invitations', invitationController.createGuestInvitation)
routes.get('/api/guest_invitations', invitationController.getListGuestInvitation)
routes.get('/api/guest_invitations/:id', invitationController.getGuestInvitation)
routes.delete('/api/guest_invitations/:id', invitationController.deleteGuestInvitation)
routes.patch('/api/guest_invitations/attendance', invitationController.setGuestAttendance)
routes.patch('/api/guest_invitations/scan_barcode', invitationController.scanGuestBarcode)

routes.post('/api/wishes', wishController.create)
routes.get('/api/wishes', wishController.getList)
routes.get('/api/wishes/:id', wishController.get)
routes.patch('/api/wishes', wishController.update)
routes.delete('/api/wishes/:id', wishController.delete)

module.exports = routes