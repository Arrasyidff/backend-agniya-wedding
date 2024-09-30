const { User } = require('../models')
const { verifyToken } = require('../helpers/generateToken')

module.exports = async (req, res, next) => {
	try {
		const { token } = req.headers
		if (!token) throw { name: 'authenticate' }

		try {
			const decoded = verifyToken(token)
			if (!decoded.id) throw { name: 'authenticate' }

			const user = await User.findOne({ where: {email: decoded.email} })
			req.logInUser = decoded
			if (!user) throw { name: 'authenticate' }
			
			next()
		} catch (error) {
			throw { name: 'authenticate' }
		}
	} catch (error) {
		next(error)
	}
}