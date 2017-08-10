'use strict';
module.exports = function (app) {
    var viewWaterLevelController = require("../controllers/viewWaterLevelController");

    app.route('/waterLevel').get(viewWaterLevelController.getAllWaterLevelReadings);
};