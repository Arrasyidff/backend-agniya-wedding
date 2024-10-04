const { Guest } = require('../models')

class GuestService {
	async create({
		name,
		email,
		phone_number,
		acquaintance_from,
		address,
		additional_notes
	})
	{
		try {
			const newGuest = await Guest.create({
				name,
				email,
				phone_number,
				acquaintance_from,
				address,
				additional_notes
			})
			return {
				success: true,
				message: 'guest created',
				data: newGuest.id
			}
		} catch (error) {
			throw error
		}
	}

	async getList()
	{
		try {
			let guests = await Guest.findAll({
				attributes: { exclude: ['createdAt', 'updatedAt'] },
				order: [['name', 'ASC']]
			})

			return {
				success: true,
				data: guests
			}
		} catch (error) {
			throw error
		}
	}

	async get(id)
	{
		try {
			let guest = await Guest.findByPk(id, {
				attributes: { exclude: ['createdAt', 'updatedAt'] },
			})

			if (!guest) throw { name: 'not_found' }

			return {
				success: true,
				data: guest
			}
		} catch (error) {
			throw error
		}
	}

	async update({
		id,
		name,
		email,
		phone_number,
		acquaintance_from,
		address,
		additional_notes
	})
	{
		try {
			const guest = await this.get(id)
			await Guest.update({
				name,
				email,
				phone_number,
				acquaintance_from,
				address,
				additional_notes
			}, { where: { id } })

			return {
				success: true,
				message: 'guest updated',
				data: guest.id
			}
		} catch (error) {
			throw error
		}
	}

	async delete(id)
	{
		try {
			await this.get(id)

			await Guest.destroy({ where: { id } })
			return {
				success: true,
				message: 'guest deleted',
			}
		} catch (error) {
			throw error
		}
	}
}

module.exports = GuestService