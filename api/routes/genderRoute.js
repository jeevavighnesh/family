'use strict';
module.exports = function (app) {
    var genderController = require("../controllers/genderController");

    app.route('/genders').get(genderController.getAllGenders);
};