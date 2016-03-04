var PageView = require('./base');
var CollectionRenderer = require('ampersand-collection');
var templates = require('../../templates/pages/portfolio.hbs');
var portfolioResource = require('../resources/portfolioResource');
var portfolioItems = require('../views/portfolioItems');
var PortfolioModel = require('../models/PortfolioModel');
var PortfolioData = require('../fixtures/PortfolioData');
var portfolioItems = require('../views/portfolioItems');

module.exports = PageView.extend({
    pageTitle: 'home',
    template: templates,
    subviews: {
        portfolioTiles: {
            hook: 'tileWrapper',
            prepareView: function (el) {
                
                var collectionModel = new portfolioResource(PortfolioData);
                
                return new portfolioItems({
                    el: el,
                    parent: this,
                    collection: collectionModel
                });

                /*
                //console.log(collection);
                
                var view = new portfolioItems({
					el: el,
					parent: this,
					collection: collection
				});

				return view;*/
                
            }
        }
        
    }
});
