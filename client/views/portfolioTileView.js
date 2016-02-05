var View = require('ampersand-view');
var template = require('../../templates/portfolioTile.hbs');

module.exports = View.extend({
    template: template,
    bindings: {
        'model.id': {
            type: 'attribute',
            hook: 'tile-item',
            name: 'id'
        },
        'model.title': {
            type: 'text',
            hook: 'tile-title'
        },
        'model.dateStart': {
            type: 'text',
            hook: 'date-start'
        },
        'model.dateEnd': {
            type: 'text',
            hook: 'date-end'
        }
    }
});