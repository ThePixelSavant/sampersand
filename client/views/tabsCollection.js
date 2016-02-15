var Collection = require('ampersand-collection-view');
var tabItem = require('./tabItem');

module.exports = Collection.extend({
	view: tabItem,
    bubbledEvents: [
		"showTab"
	]
});