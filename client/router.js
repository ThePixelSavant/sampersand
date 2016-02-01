var app = require('ampersand-app');
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var ContactPage = require('./pages/contact');
//var CollectionDemo = require('./pages/collection-demo');
//var InfoPage = require('./pages/info');
//var d3Page = require('./pages/d3');
//var PersonAddPage = require('./pages/person-add');
//var PersonEditPage = require('./pages/person-edit');
//var PersonShowPage = require('./pages/person-show');

module.exports = Router.extend({
    routes: {
        '': 'home',
        'contact': 'contact',
        /*'collections': 'collectionDemo',
        'info': 'info',
        'd3': 'd3',
        'person/add': 'personAdd',
        'person/:id': 'personView',
        'person/:id/edit': 'personEdit',*/
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.trigger('page', new HomePage({
            model: app.portfolio
        }));
    },
    
    contact: function () {
        app.trigger('page', new ContactPage({
            //model: app.portfolio
        }));
    },

    /*collectionDemo: function () {
        app.trigger('page', new CollectionDemo({
            model: app.me,
            collection: app.people
        }));
    },

    info: function () {
        app.trigger('page', new InfoPage({
            model: app.me
        }));
    },
    
    d3: function () {
        app.trigger('page', new d3Page({
            model: app.me
        }));
    },

    personAdd: function () {
        app.trigger('page', new PersonAddPage());
    },

    personEdit: function (id) {
        app.trigger('page', new PersonEditPage({
            id: id
        }));
    },

    personView: function (id) {
        app.trigger('page', new PersonShowPage({
            id: id
        }));
    },*/

    catchAll: function () {
        this.redirectTo('');
    }
});
