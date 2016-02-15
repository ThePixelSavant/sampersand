var View = require('ampersand-view');
var template = require('../../templates/bootstrap/tabContent.hbs');

module.exports = View.extend({
    template: template,
    bindings: {
        'model.title': {
            type: 'text',
            hook: 'tab-pane-title'
        },
        'model.tabContent': {
            type: 'text',
            hook: 'tab-pane-content'
        },
        'model.tid': {
            type: 'attribute',
            hook: 'tab-pane',
			name: 'id'
        },
        'model.tbid': {
            type: 'attribute',
            hook: 'tab-pane',
			name: 'aria-labelledby'
        },
        'model.active': {
            type: 'booleanClass',
            hook: 'tab-pane',
			name: 'active'
        }
    }
});