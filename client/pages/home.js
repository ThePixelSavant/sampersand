var PageView = require('./base');
var CollectionRenderer = require('ampersand-collection');
var templates = require('../../templates/pages/home.hbs');
var carouselView= require('../views/carousel');
var bsn = require("bootstrap.native");

module.exports = PageView.extend({
    pageTitle: 'home',
    template: templates,
    initialize: function (opts) {
        PageView.prototype.initialize.apply(this, arguments);
        //bsn.Carousel('.carousel');
        //console.log(bsn.Carousel());
	},
    /*initialize: {
        //bsn.Carousel('.carousel').Carousel();
        console.log(this);
    },*/
    subviews: {
        carousel: {
            hook: 'carousel-wrapper',
            prepareView: function (el) {
                return new carouselView({
                    el: el,
                    parent: this
                });
                //console.log(this);
                //var carouselView new carousel().render;
            }
        }
    }/*,
    events: {
        'slid.bs.carousel [data-hook="splash-carousel"]': 'removeSlide',
        'slide.bs.carousel [data-hook="splash-carousel"]': 'addSlide'
    },
    removeSlide: function(e) {
        console.log(e);
    },
    addSlide: function(e) {
        console.log(e);
    }*/
});
