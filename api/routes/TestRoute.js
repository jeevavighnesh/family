'use strict';
module.exports = function (app) {
    var relationController = require("../controllers/relationController");

    app.route('/test').get(function (req, resp) {
        resp.send("Hai");
    });
};