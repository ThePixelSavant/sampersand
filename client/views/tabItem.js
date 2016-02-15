var View = require('ampersand-view');
var template = require('../../templates/bootstrap/tabItem.hbs');

module.exports = View.extend({
    initialize: function () {
        View.prototype.initialize.apply(this, arguments);
    },
    template: template,
    bindings: {
        'model.title': {
            type: 'text',
            hook: 'tab-text'
        },
        'model.tid': {
            type: 'attribute',
            hook: 'tab-text',
            name: 'aria-controls'
        },
        'model.tbid': {
            type: 'attribute',
            hook: 'tab-text',
            name: 'id'
        },
        'model.active': {
            type: 'booleanClass',
            hook: 'tab-wrapper',
			name: 'active'
        }
    },
    bubbledEvents: [
		"showTab"
	],
	events: {
		//"click [data-hook='view-password-link']": '_showModal'
        'click [data-hook="tab-text"]': '_showTab',
	},
	_showTab: function(e) {
		e.preventDefault();
		this.trigger('showTab', this.model, 'view-tab');
	}
});