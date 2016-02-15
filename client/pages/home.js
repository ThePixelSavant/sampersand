var PageView = require('./base');
var templates = require('../../templates/pages/home.hbs');
var splashMain = require('../views/carousel');
var splashText = require('../views/splashText');
var homeTabs = require('../views/homeTabs');

module.exports = PageView.extend({
    pageTitle: 'home',
    template: templates,
    subviews: {
        splashMain: {
            hook: 'splash-main',
            prepareView: function (el) {
                return new splashMain({
                    el: el,
                    parent: this
                });
            }
        },
        splashText: {
            hook: 'splash-sub',
            prepareView: function (el) {
                return new splashText({
                    el: el,
                    parent: this
                });
            }
        },
        homeTabs: {
            hook: 'home-tabs',
            prepareView: function (el) {
                return new homeTabs({
                    el: el,
                    parent: this
                });
            }
        }
    }
});
