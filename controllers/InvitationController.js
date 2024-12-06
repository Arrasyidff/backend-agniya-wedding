const { InvitationService } = require('../services')

class InvitationController {
    static async create(req, res, next) {
		try {
			const { name, phone_number, guest_count, attendance, wish, code_session } = req.body
			const response = await InvitationService().create({ name, phone_number, guest_count, attendance, wish, code_session })
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async getList(req, res, next) {
		try {
			const response = await InvitationService().getList(req.query)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}
}

module.exports = InvitationController