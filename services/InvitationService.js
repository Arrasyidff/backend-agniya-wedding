const { Op } = require('sequelize')
const { Invitation } = require('../models')

class InvitationService {
	async create({ name, phone_number, guest_count, attendance, wish, code_session })
	{
		try {
			guest_count = attendance === true ? guest_count : 0
			const newInvitation = await Invitation.create({
				name,
				phone_number,
				guest_count,
				attendance,
				wish,
				code_session
			})
			return {
				success: true,
				message: 'invitation created',
				data: newInvitation.id
			}
		} catch (error) {
			throw error
		}
	}

	async getList(query)
	{
		try {
			const { search=null, sort_key=null, sort_order=null } = query

			let whereCondition = {}
			if (search) {
				if (!isNaN(+search) && (+search <= 100)) {
					whereCondition = {
						[Op.or]: [
							{guest_count: {
								[Op.eq]: search
							}},
						]
					}
				} else {
					whereCondition = {
						[Op.or]: [
							{name: {
								[Op.iLike]: `%${search}%`,
							}},
							{phone_number: {
								[Op.iLike]: `%${search}%`,
							}},
							{wish: {
								[Op.iLike]: `%${search}%`,
							}},
						],
					};
				}
			}

			let order = [['createdAt', 'DESC']]
			if ((sort_key !== null) && (sort_order !== null)) {
				order = [[sort_key, sort_order.toUpperCase()]]
			}

			let invitations = await Invitation.findAll({
				where: whereCondition,
				order: order
			})

			return {
				success: true,
				data: invitations
			}
		} catch (error) {
			throw error
		}
	}
}

module.exports = InvitationService