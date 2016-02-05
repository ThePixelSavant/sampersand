// PortfolioData.js Model - portfolio-data-js.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
    props: {
        id: ['number'],
        title:['string'],
        content:['string'],
        dateStart:['string'],
        dateEnd:['string'],
        coolnessFactor:['number']
    }
});