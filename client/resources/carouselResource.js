var Collection = require('ampersand-collection');
var carouselModel = require('../models/carouselModel')

module.exports = Collection.extend({
	model: carouselModel
});