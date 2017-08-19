'use strict';
module.exports = function (app) {
    var maritalStatusController = require("../controllers/maritalStatusesController");

    app.route('/maritalStatuses').get(maritalStatusController.getAllMaritalStatuses);
};