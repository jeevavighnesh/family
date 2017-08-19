'use strict';
module.exports= function (app) {
    var relationController = require("../controllers/relationController");

    app.route('/relations').get(relationController.getAllRelations);
};