const { TemplateService } = require('../services')

class TemplateController {
    static async getUser(req, res, next) {
		try {
			let id = req.params.id
			if (!id && req?.logInUser?.id) id = req.logInUser.id
			const user = await UserService().getUserById(id)
			res.status(200).json(user)
		} catch (error) {
			next(error)
		}
	}
}

module.exports = TemplateController