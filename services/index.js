class Service {
	static TemplateService () {
		return new (require('./TemplateService'))
	}
}

module.exports = Service