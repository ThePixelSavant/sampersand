var Collection = require('ampersand-collection');
var portfolioModel = require('../models/PortfolioModel')

module.exports = Collection.extend({
	model: portfolioModel
});