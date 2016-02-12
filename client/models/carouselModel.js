var AmpModel = require('ampersand-model');

module.exports = AmpModel.extend({
    props: {
        id: ['number'],
        title:['string'],
        content:['string'],
        dateStart:['string'],
        dateEnd:['string'],
        active: ["boolean", false, false]
    }
});