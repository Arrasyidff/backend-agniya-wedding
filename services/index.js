class Service {
	static InvitationService () {
		return new (require('./InvitationService'))
	}

	static GuestService () {
		return new (require('./GuestService'))
	}
}

module.exports = Service