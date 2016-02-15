var View = require('ampersand-view');
var template = require('../../templates/bootstrap/carousel.hbs');
var carouselResource = require('../resources/carouselResource');
var carouselItems = require('./carouselCollection');
var carouselPagerCollection = require('./carouselPagerCollection');
var carouselData = require('../fixtures/carouselData');
var bsn = require("bootstrap.native");
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
    },
    /*events: {
        'slid.bs.carousel [data-hook="splash-carousel"]': 'removeSlide',
        'slide.bs.carousel [data-hook="splash-carousel"]': 'addSlide'
    },*/
    removeSlide: function(e) {
        console.log( 'The #' + e.target.id + ' is about to slide, and this was the "slid" event' );
    },
    addSlide: function(e) {
        console.log( 'The #' + e.target.id + ' has finished the slide transition, and this was the "slide" event' );
    }
});