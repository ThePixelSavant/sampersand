var Collection = require('ampersand-collection-view');
var carouselItem = require('./carouselItem');

module.exports = Collection.extend({
	view: carouselItem
});