var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var inputTemplate = require('../../templates/formInput.hbs');

module.exports = FormView.extend({
    autoRender: true,
    fields: function () {
        return [
            new InputView({
                template: inputTemplate(),
                label: 'First Name',
                name: 'firstName',
                value: this.model && this.model.firstName,
                placeholder: 'First Name',
                parent: this,
                tests: [
                    function (val) {
                        if (/^[0-9]+$/.test(val)) return 'Numbers are not allowed';
                    }
                ]
            }),
            new InputView({
                template: inputTemplate(),
                label: 'Last Name',
                name: 'lastName',
                value: this.model && this.model.lastName,
                placeholder: 'Last Name',
                parent: this,
                tests: [
                    function (val) {
                        if (/^[0-9]+$/.test(val)) return 'Numbers are not allowed';
                    }
                ]
            }),
            new InputView({
                template: inputTemplate(),
                label: 'Telephone',
                name: 'Telephone',
                value: this.model && this.model.telephone,
                placeholder: 'Telephone',
                parent: this,
                tests: [
                    function (val) {
                        if (!/^\d{4}-\d{3}-\d{4}$/.test(val)) return 'format must be: xxxx-xxx-xxxx';
                    }
                ]
            })
        ];
    }
});
