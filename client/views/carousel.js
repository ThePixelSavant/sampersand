var View = require('ampersand-view');
var template = require('../../templates/bootstrap/carousel.hbs');
var carouselResource = require('../resources/carouselResource');
var carouselItems = require('./carouselCollection');
var carouselPagerCollection = require('./carouselPagerCollection');
var carouselData = require('../fixtures/carouselData');

var collectionModel = new carouselResource(carouselData);

module.exports = View.extend({
    template: template,
    subviews: {
        carouselItems: {
            hook: 'carousel-items',
            prepareView: function (el) {
                return new carouselItems({
                    el: el,
                    parent: this,
                    collection: collectionModel
                });
                
            }
        },
        carouselPager: {
            hook: 'carousel-pager',
            prepareView: function (el) {
                return new carouselPagerCollection({
                    el: el,
                    parent: this,
                    collection: collectionModel
                });
                
            }
        }
    }
});