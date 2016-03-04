var Collection = require('ampersand-collection-view');
var portfolioTile = require('./portfolioTileView');

module.exports = Collection.extend({
	view: portfolioTile
});