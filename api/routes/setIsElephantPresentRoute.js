'use strict';
module.exports= function (app) {
    var setIsElephantPresentController = require("../controllers/setIsElephantPresentController");

    app.route('/ac/setIsElephantPresent/:setIsElephantPresent').get(setIsElephantPresentController.setIsElephantPresent);
};
