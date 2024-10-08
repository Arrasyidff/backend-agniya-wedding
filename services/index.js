class Service {
	static InvitationService () {
		return new (require('./InvitationService'))
	}

	static GuestService () {
		return new (require('./GuestService'))
	}

	static WishService () {
		return new (require('./WishService'))
	}
}

module.exports = Service