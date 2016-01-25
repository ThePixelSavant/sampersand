var PageView = require('./base');
var templates = require('jade!../../templates/pages/home.jade');


module.exports = PageView.extend({
    pageTitle: 'home',
    template: templates
});
