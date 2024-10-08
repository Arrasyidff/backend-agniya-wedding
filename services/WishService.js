const { Wish, Guest } = require('../models')

class WishService {
	async create({ guest_id, wish })
	{
		try {
			const newWish = await Wish.create({ guest_id, wish })
			return {
				success: true,
				message: 'Wish Created',
				data: newWish.id
			}
		} catch (error) {
			throw error
		}
	}

	async getList()
	{
		try {
			let wishes = await Wish.findAll({
				attributes: { exclude: ['createdAt', 'updatedAt'] },
				order: [['updatedAt', 'ASC']],
				include: [
					{
						model: Guest,
						as: 'guest',
						attributes: { exclude: ['createdAt', 'updatedAt'] },
					}
				]
			})
			return {
				success: true,
				data: wishes
			}
		} catch (error) {
			throw error
		}
	}

	async get(id)
	{
		try {
			let wish = await Wish.findByPk(id, {
				attributes: { exclude: ['createdAt', 'updatedAt'] },
				include: [
					{
						model: Guest,
						as: 'guest',
						attributes: { exclude: ['createdAt', 'updatedAt'] },
					}
				]
			})
			if (!wish) throw { name: 'not_found' }
			return {
				success: true,
				data: wish
			}
		} catch (error) {
			throw error
		}
	}

	async update({ id, wish })
	{
		try {
			const wishData = await this.get(id)
			await Wish.update({ wish }, { where: { id } })
			return {
				success: true,
				message: 'Wish Updated',
				data: wishData.id
			}
		} catch (error) {
			throw error
		}
	}

	async delete(id)
	{
		try {
			await this.get(id)
			Wish.destroy({ where: { id } })
			return {
				success: true,
				message: 'Wish Deleted',
			}
		} catch (error) {
			throw error
		}
	}
}

module.exports = WishService