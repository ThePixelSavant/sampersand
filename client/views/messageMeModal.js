var View = require('ampersand-view');
var templates = require('../../templates/partials/messageMe.hbs');
var messageMeForm = require('../forms/messageMe');


module.exports = View.extend({
    template: templates,
    autoRender: true,
    subviews: {
        messageMe: {
            hook: 'message-me',
            prepareView: function (el) {
                return new messageMeForm({
                    el: el,
                    parent: this
                });
                
            }
        }
    }
});
