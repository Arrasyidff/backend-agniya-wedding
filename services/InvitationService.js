const { Invitation } = require('../models')

class InvitationService {
	async create({ event_name, event_date, event_time })
	{
		try {
			let [year, month, day] = event_date.split('-') 
			let [hour, minute] = event_time.split(':') 
			event_date = new Date(year, (month-1), day, hour, minute).getTime() / 1000
			const newInvitation = await Invitation.create({ event_date, event_name })
			return {
				success: true,
				message: 'invitation created',
				data: newInvitation.id
			}
		} catch (error) {
			throw error
		}
	}

	async getList()
	{
		try {
			let invitations = await Invitation.findAll({
				attributes: { exclude: ['createdAt', 'updatedAt'] },
				order: [['event_date', 'ASC']]
			})

			return {
				success: true,
				data: invitations
			}
		} catch (error) {
			throw error
		}
	}

	async get(id)
	{
		try {
			let invitation = await Invitation.findByPk(id, {
				attributes: { exclude: ['createdAt', 'updatedAt'] },
			})

			if (!invitation) throw { name: 'not_found' }

			return {
				success: true,
				data: invitation
			}
		} catch (error) {
			throw error
		}
	}

	async update({ id, event_name, event_date, event_time })
	{
		try {
			await this.get(id)

			let [year, month, day] = event_date.split('-') 
			let [hour, minute] = event_time.split(':') 
			event_date = new Date(year, (month-1), day, hour, minute).getTime() / 1000
			const newInvitation = await Invitation.update({ event_date, event_name }, {
				where: { id }
			})
			return {
				success: true,
				message: 'invitation updated',
				data: newInvitation.id
			}
		} catch (error) {
			throw error
		}
	}

	async delete(id)
	{
		try {
			await this.get(id)

			await Invitation.destroy({ where: { id } })
			return {
				success: true,
				message: 'invitation deleted',
			}
		} catch (error) {
			throw error
		}
	}
}

module.exports = InvitationService