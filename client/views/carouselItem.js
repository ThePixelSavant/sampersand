var View = require('ampersand-view');
var template = require('../../templates/bootstrap/carouselItem.hbs');

module.exports = View.extend({
    template: template,
    bindings: {
        'model.content': {
            type: 'attribute',
            hook: 'carousel-image',
            name: 'src'
        },
        'model.title': {
            type: 'text',
            hook: 'carousel-caption'
        },
        'model.active': {
            type: 'booleanClass',
            hook: 'carousel-item',
			name: 'active'
        }
    }
});