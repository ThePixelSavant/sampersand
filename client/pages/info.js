var PageView = require('./base');
var templates = require('jade!../../templates/pages/info.jade');
//var templates = require('../templates');


module.exports = PageView.extend({
    pageTitle: 'more info',
    template: templates
});
