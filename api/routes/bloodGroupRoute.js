'use strict';
module.exports= function (app) {
    var bloodGroupController = require("../controllers/bloodGroupController");

    app.route('/bloodGroups').get(bloodGroupController.getAllBloodGroups);
};