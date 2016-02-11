var PageView = require('./base');
var CollectionRenderer = require('ampersand-collection');
var templates = require('../../templates/pages/home.hbs');
var pageResource = require('../resources/pageResource');
var carousel = require('../views/carousel');
var portfolioItems = require('../views/portfolioItems');
var PageData = require('../fixtures/PageData');
var portfolioItems = require('../views/portfolioItems');

module.exports = PageView.extend({
    pageTitle: 'home',
    template: templates,
    subviews: {
        portfolioTiles: {
            hook: 'tileWrapper',
            prepareView: function (el) {
                
                var collectionModel = new pageResource(PageData);
                
                return new portfolioItems({
                    el: el,
                    parent: this,
                    collection: collectionModel
                });
                
            }
        },
        carousel: {
            hook: 'carousel-wrapper',
            prepareView: function (el) {
                return new carousel({
                    el: el,
                    parent: this
                });
                
            }
        }
        
    }
});
