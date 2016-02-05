var PageView = require('./base');
var templates = require('../../templates/pages/contact.hbs');
var messageMe = require('../forms/messageMe');


module.exports = PageView.extend({
    pageTitle: 'Contact',
    template: templates,
    subviews: {
        messageMe: {
            hook: 'message-me',
            prepareView: function (el) {
                return new messageMe({
                    el: el,
                    parent: this
                });
                
            }
        }
    }
});
