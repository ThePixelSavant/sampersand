var AmpModel = require('ampersand-model');

module.exports = AmpModel.extend({
    props: {
        id: ['number'],
        title: ['string'],
        tabContent: ['string'],
        active: ['boolean', false, false]
    },
    derived: {
        tid: {
            deps: ['id'],
            fn: function () {
                return 'tid-' + this.id;
            }
        },
        tbid: {
            deps: ['id'],
            fn: function () {
                return 'tid-' + this.id + '-tab';
            }
        }
    }
});