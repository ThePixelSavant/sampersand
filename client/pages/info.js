var PageView = require('./base');
var templates = require('../../templates/pages/info.jade');
//var templates = require('../templates');


module.exports = PageView.extend({
    pageTitle: 'more info',
    template: templates
});
