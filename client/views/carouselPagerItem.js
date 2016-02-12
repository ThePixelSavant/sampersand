var View = require('ampersand-view');
var template = require('../../templates/bootstrap/carouselPagerItem.hbs');

module.exports = View.extend({
    template: template,
    bindings: {
        'model.id': {
            type: 'attribute',
            hook: 'pager-item',
            name: 'data-slide-to'
        },
        'model.active': {
            type: 'booleanClass',
            hook: 'pager-item',
			name: 'active'
        }
    }
});