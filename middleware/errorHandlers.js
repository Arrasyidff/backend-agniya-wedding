module.exports = (err, req, res, next) => {
	const { name, status, message, snapshot } = err
	// console.log(err)
	switch (name) {
		case 'SequelizeUniqueConstraintError':
			res.status(400).json({
				success: false,
				message: err.errors[0].message
			})
			break;
		case 'SequelizeValidationError':
			res.status(400).json({
				success: false,
				message: err.errors[0].message
			})
			break;
		case 'invalid_account':
			res.status(401).json({
				success: false,
				message: 'invalid account'
			})
			break;
		case 'not_found':
			res.status(404).json({
				success: false,
				message: 'data not found'
			})
			break;
		case 'authenticate':
			res.status(401).json({
				success: false,
				message: 'invalid account'
			})
			break;
		default:
			res.status(status ?? 500).json({
				success: false,
				message: message ?? 'internal service error',
				snapshot: snapshot ?? null
			})
			break;
	}
}