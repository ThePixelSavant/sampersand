// This app view is responsible for rendering all content that goes into
// <html>. It's initted right away and renders itself on DOM ready.
var app = require('ampersand-app');
var setFavicon = require('favicon-setter');
var View = require('ampersand-view');
var dom = require('ampersand-dom');
var ViewSwitcher = require('ampersand-view-switcher');
var ModalView = require('ampersand-modal-view');
var _ = require('lodash');
var domify = require('domify');
var localLinks = require('local-links');
var templates = require('../../templates/body.hbs');
var headTemplate = require('../../templates/head.hbs');
var bsn = require('bootstrap.native');
var messageMe = require('./messageMeModal');
var modalTemplate = require('../../templates/modalContent.hbs');

//require('bootstrap-webpack!../../bootstrap.config.js');
require('../../stylesheets/app.styl');

module.exports = View.extend({
    template: templates,
    autoRender: true,
    initialize: function () {
        // this marks the correct nav item selected
        this.listenTo(app, 'page', this.handleNewPage);
        //this.on('messageMe', this.messageMe, this);
    },
    events: {
        'click a[href]': 'handleLinkClick',
        'click [data-hook="message-me-modal"]': 'messageMe'
    },
    render: function () {
        // some additional stuff we want to add to the document head

        document.head.appendChild(domify(headTemplate()));

        // main renderer
        this.renderWithTemplate(this);

        // init and configure our page switcher
        this.pageSwitcher = new ViewSwitcher(this.queryByHook('page-container'), {
            show: function (newView, oldView) {
                // it's inserted and rendered for me
                document.title = _.result(newView, 'pageTitle') || 'PixelSavant';
                document.scrollTop = 0;

                // add a class specifying it's active
                dom.addClass(newView.el, 'active');

                // store an additional reference, just because
                app.currentPage = newView;
            }
        });

        // setting a favicon for fun (note, it's dynamic)
        setFavicon('/favicon.ico');
        return this;
    },

    handleNewPage: function (view) {
        // tell the view switcher to render the new one
        this.pageSwitcher.set(view);

        // mark the correct nav item selected
        this.updateActiveNav();
    },

    // Handles all `<a>` clicks in the app not handled
    // by another view. This lets us determine if this is
    // a click that should be handled internally by the app.
    handleLinkClick: function (e) {
        // This module determines whether a click event is 
        // a local click (making sure the for modifier keys, etc)
        // and dealing with browser quirks to determine if this
        // event was from clicking an internal link. That we should
        // treat like local navigation.
        var localPath = localLinks.pathname(e);

        if (localPath) {
            e.preventDefault();
            app.navigate(localPath);
        }
    },

    updateActiveNav: function () {
        var path = window.location.pathname.slice(1);

        this.queryAll('.nav a[href]').forEach(function (aTag) {
            var aPath = aTag.pathname.slice(1);

            if ((!aPath && !path) || (aPath && path.indexOf(aPath) === 0)) {
                dom.addClass(aTag.parentNode, 'active');
            } else {
                dom.removeClass(aTag.parentNode, 'active');
            }
        });
    },

    messageMe: function (e) {
        e.preventDefault();
        var MessageForm = new messageMe();

        this._modal = new ModalView({
            title: 'Message Me',
            description: 'trying to get a form loading here',
            template: modalTemplate,
            contentView: MessageForm,
            parent: this
        });
        
        //console.log(this._modal);
        
        /*return new bsn.Modal(modalFrame, {
            content: modalContent.el.innerHTML
        });*/
        
        function timerIn(el) {
            el.classList.add('in');
            //console.log(el);
            return el;
        }

        this._modal.openIn(
            'body',
            function(){
                console.log(this.style);
                this.style.display = 'block';
                setTimeout(timerIn(this), 10000);
                //setTimeout(this.style.display = 'block', 1000);
            }
        );
    },
    _animate: function(el){
        
    }

});