var PageView = require('./base');
var templates = require('../../templates/pages/home.hbs');
var carouselView = require('../views/carousel');
var bsn = require("bootstrap.native");

module.exports = PageView.extend({
    pageTitle: 'home',
    template: templates,
    initialize: function (opts) {
        PageView.prototype.initialize.apply(this, arguments);
        //bsn.Carousel('.carousel');
        //console.log(bsn.Carousel());
	},
    subviews: {
        carousel: {
            hook: 'carousel-wrapper',
            prepareView: function (el) {
                return new carouselView({
                    el: el,
                    parent: this
                });
            }
        }
    }/*,
    events: {
        'slid.bs.carousel [data-hook="splash-carousel"]': 'removeSlide',
        'slide.bs.carousel [data-hook="splash-carousel"]': 'addSlide'
    },
    removeSlide: function(e) {
        console.log( 'The #' + e.target.id + ' is about to slide, and this was the "slid" event' );
    },
    addSlide: function(e) {
        console.log( 'The #' + e.target.id + ' has finished the slide transition, and this was the "slide" event' );
    }*/
});
