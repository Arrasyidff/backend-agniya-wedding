const {generateToken, verifyToken} = require('../helpers/generateToken')

class UserService {
	async createUser(payload)
	{
		try {
			const newUser = await User.create(payload)
			return {
				success: true,
				message: 'User Created',
				data: newUser
			}
		} catch (error) {
			throw error
		}
	}
}

module.exports = UserService