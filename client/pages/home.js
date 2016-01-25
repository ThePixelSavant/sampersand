var PageView = require('./base');
var templates = require('../../templates/pages/home.jade');


module.exports = PageView.extend({
    pageTitle: 'home',
    template: templates
});
