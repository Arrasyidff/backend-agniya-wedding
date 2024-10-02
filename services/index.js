class Service {
	static InvitationService () {
		return new (require('./InvitationService'))
	}
}

module.exports = Service