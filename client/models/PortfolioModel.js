// PortfolioData.js Model - portfolio-data-js.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
    props: {
        id: ['string'],
        title:['string'],
        content:['string'],
        dateStart:['date'],
        dateEnd:['date'],
        coolnessFactor:['number']
    }
});