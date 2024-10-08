const { WishService } = require('../services')

class WishController {
    static async create(req, res, next) {
		try {
			const { guest_id, wish } = req.body
			const response = await WishService().create({ guest_id, wish })
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async getList(req, res, next) {
		try {
			const response = await WishService().getList()
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async get(req, res, next) {
		try {
			const { id } = req.params
			const response = await WishService().get(id)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async update(req, res, next) {
		try {
			const { id, wish } = req.body
			const response = await WishService().update({ id, wish })
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async delete(req, res, next) {
		try {
			const { id } = req.params
			const response = await WishService().delete(id)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}
}

module.exports = WishController