'use strict';
module.exports= function (app) {
    var getIsElephantPresentController = require("../controllers/getIsElephantPresentController");

    app.route('/ac/isElephantPresent').get(getIsElephantPresentController.getIsElephantPresent);
};
