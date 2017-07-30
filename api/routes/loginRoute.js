'use strict';
module.exports = function (app) {
    var loginController = require("../controllers/loginController");

    app.route('/genders').post(loginController.login);
};