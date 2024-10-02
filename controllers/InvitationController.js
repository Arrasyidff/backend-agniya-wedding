const { InvitationService } = require('../services')

class InvitationController {
    static async create(req, res, next) {
		try {
			const { event_name, event_date, event_time } = req.body
			const response = await InvitationService().create({ event_name, event_date, event_time })
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async getList(req, res, next) {
		try {
			const response = await InvitationService().getList()
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async get(req, res, next) {
		try {
			const { id } = req.params
			const response = await InvitationService().get(id)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async update(req, res, next) {
		try {
			const { id, event_name, event_date, event_time } = req.body
			const response = await InvitationService().update({ id, event_name, event_date, event_time })
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async delete(req, res, next) {
		try {
			const { id } = req.params
			const response = await InvitationService().delete(id)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}
}

module.exports = InvitationController