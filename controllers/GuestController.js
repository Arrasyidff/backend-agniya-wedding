const { GuestService } = require('../services')

class GuestController {
    static async create(req, res, next) {
		try {
			const {
				name,
				email,
				phone_number,
				acquaintance_from,
				address,
				additional_notes
			} = req.body
			const response = await GuestService().create({
				name,
				email,
				phone_number,
				acquaintance_from,
				address,
				additional_notes
			})
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async getList(req, res, next) {
		try {
			const response = await GuestService().getList(req.query)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async update(req, res, next) {
		try {
			const {
				id,
				name,
				email,
				phone_number,
				acquaintance_from,
				address,
				additional_notes
			} = req.body
			const response = await GuestService().update({
				id,
				name,
				email,
				phone_number,
				acquaintance_from,
				address,
				additional_notes
			})
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async delete(req, res, next) {
		try {
			const { id } = req.params
			const response = await GuestService().delete(id)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}
}

module.exports = GuestController