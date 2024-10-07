const { Invitation, Guest, GuestInvitation } = require('../models')

class InvitationService {
	async create({ event_name, event_date, event_time })
	{
		try {
			let [year, month, day] = event_date.split('-') 
			let [hour, minute] = event_time.split(':') 
			event_date = new Date(year, (month-1), day, hour, minute).getTime()
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
			const invitation = await this.get(id)

			let [year, month, day] = event_date.split('-') 
			let [hour, minute] = event_time.split(':') 
			event_date = new Date(year, (month-1), day, hour, minute).getTime()
			await Invitation.update({ event_date, event_name }, {
				where: { id }
			})
			return {
				success: true,
				message: 'invitation updated',
				data: invitation.id
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

	async createGuestInvitation({
		guest_id,
		invitation_id
	})
	{
		try {
			const newGuestInvitation = await GuestInvitation.create({
				guest_id,
				invitation_id
			})
			return {
				success: true,
				message: 'guest invitation created',
				data: newGuestInvitation.id
			}
		} catch (error) {
			throw error
		}
	}

	async getListGuestInvitation(type)
	{
		try {
			let filter = {
				attributes: { exclude: ['createdAt', 'updatedAt'] },
				include: [
					{
						model: Guest,
						attributes: { exclude: ['createdAt', 'updatedAt'] },
						as: 'guest'
					},
					{
						model: Invitation,
						attributes: { exclude: ['createdAt', 'updatedAt'] },
						as: 'invitation'
					}
				]
			}
			if (type) filter.where = { 'invitation_id': type }

			let guestInvitations = await GuestInvitation.findAll(filter)
			return {
				success: true,
				data: guestInvitations
			}
		} catch (error) {
			throw error
		}
	}

	async getGuestInvitation(id)
	{
		try {
			let guestInvitation = await GuestInvitation.findByPk(id, {
				attributes: { exclude: ['createdAt', 'updatedAt'] },
				include: [
					{
						model: Guest,
						attributes: { exclude: ['createdAt', 'updatedAt'] },
						as: 'guest'
					},
					{
						model: Invitation,
						attributes: { exclude: ['createdAt', 'updatedAt'] },
						as: 'invitation'
					}
				]
			})

			if (!guestInvitation) throw { name: 'not_found' }

			return {
				success: true,
				data: guestInvitation
			}
		} catch (error) {
			throw error
		}
	}

	async updateGuestInvitation({
		id,
		guest_id,
		invitation_id,
		attendance_status,
		guest_count,
		phone_number,
		attendance,
		check_in_time
	})
	{
		try {
			const guestInvitation = await this.getGuestInvitation(id)
			await GuestInvitation.update({
				guest_id,
				invitation_id,
				attendance_status,
				guest_count,
				phone_number,
				attendance,
				check_in_time
			}, { where: { id } })
			return {
				success: true,
				message: 'guest invitation updated',
				data: guestInvitation.id
			}
		} catch (error) {
			throw error
		}
	}

	async deleteGuestInvitation(id)
	{
		try {
			await this.getGuestInvitation(id)

			await GuestInvitation.destroy({ where: { id } })
			return {
				success: true,
				message: 'guest invitation deleted',
			}
		} catch (error) {
			throw error
		}
	}
}

module.exports = InvitationService