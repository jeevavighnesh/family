'use strict';
module.exports= function (app) {
    var gitChangesController = require("../controllers/gitChangesController");

    app.route('/gitChanges').post(gitChangesController.onPushedChanges);
};
