var Collection = require('ampersand-collection-view');
var carouselPagerItem = require('./carouselPagerItem');

module.exports = Collection.extend({
	view: carouselPagerItem
});