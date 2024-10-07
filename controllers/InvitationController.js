const { InvitationService } = require('../services')

class InvitationController {
    static async create(req, res, next) {
		try {
			const { event_name, event_date, event_time } = req.body
			const response = await InvitationService().create({ event_name, event_date, event_time })
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async getList(req, res, next) {
		try {
			const response = await InvitationService().getList()
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async get(req, res, next) {
		try {
			const { id } = req.params
			const response = await InvitationService().get(id)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async update(req, res, next) {
		try {
			const { id, event_name, event_date, event_time } = req.body
			const response = await InvitationService().update({ id, event_name, event_date, event_time })
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async delete(req, res, next) {
		try {
			const { id } = req.params
			const response = await InvitationService().delete(id)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async createGuestInvitation(req, res, next) {
		try {
			const {
				guest_id,
				invitation_id
			} = req.body
			const response = await InvitationService().createGuestInvitation({
				guest_id,
				invitation_id
			})
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async getListGuestInvitation(req, res, next) {
		const { type } = req.query
		try {
			const response = await InvitationService().getListGuestInvitation(type)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async getGuestInvitation(req, res, next) {
		try {
			const { id } = req.params
			const response = await InvitationService().getGuestInvitation(id)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async deleteGuestInvitation(req, res, next) {
		try {
			const { id } = req.params
			const response = await InvitationService().deleteGuestInvitation(id)
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async setGuestAttendance(req, res, next) {
		try {
			const { id, attendance_status, guest_count, phone_number } = req.body
			const response = await InvitationService().updateGuestInvitation({
				id,
				guest_id: undefined,
				invitation_id: undefined,
				attendance_status,
				guest_count,
				phone_number
			})
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}

	static async scanGuestBarcode(req, res, next) {
		try {
			const { qrcode } = req.body
			const response = await InvitationService().updateGuestInvitation({
				id: qrcode,
				guest_id: undefined,
				invitation_id: undefined,
				attendance_status: undefined,
				guest_count: undefined,
				phone_number: undefined,
				attendance: 'present',
				check_in_time: new Date().getTime()
			})
			res.status(200).json(response)
		} catch (error) {
			next(error)
		}
	}
}

module.exports = InvitationController