var Collection = require('ampersand-collection');
var pageModel = require('../models/PageModel')

module.exports = Collection.extend({
	model: pageModel
});