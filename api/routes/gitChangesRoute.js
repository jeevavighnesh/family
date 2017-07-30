'use strict';
module.exports= function (app) {
    var gitChangesController = require("../controllers/gitChangesController");

    app.route('/bloodGroups').post(gitChangesController.onPushedChanges);
};