var PageView = require('./base');
var templates = require('../../templates/pages/portfolio.hbs');
var portfolioCollection = require('../views/portfolioCollection');

module.exports = PageView.extend({
    pageTitle: 'home',
    template: templates/*,
    subviews: {
        portfolioTiles: {
            container: 'tileWrapper',
            prepareView: function (el) {
                el: el,
                model: this.model
            }
        }
        
    }*/
});
