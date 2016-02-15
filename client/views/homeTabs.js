var View = require('ampersand-view');
var template = require('../../templates/bootstrap/tabs.hbs');
var tabsResources = require('../resources/tabsResources');
var tabsItems = require('./tabsCollection');
var tabsContent = require('./tabsContentCollection');
var tabsData = require('../fixtures/tabsData');

var tabsModel = new tabsResources(tabsData);

module.exports = View.extend({
    template: template,
    initialize: function (opts) {
        this.on('showTab', this._showTab, this);
    },
    subviews: {
        tabsItems: {
            hook: 'tabs-nav',
            prepareView: function (el) {
                return new tabsItems({
                    el: el,
                    parent: this,
                    collection: tabsModel
                });
                
            }
        },
        tabsContent: {
            hook: 'tabs-content',
            prepareView: function (el) {
                return new tabsContent({
                    el: el,
                    parent: this,
                    collection: tabsModel
                });
                
            }
        }
    },
    _showTab: function(model, type) {
        console.log(model);
        console.log(type);
        console.log(this);
    }
});