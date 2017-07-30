'use strict';
module.exports= function (app) {
    var memberController = require("../controllers/memberController");

    app.route('/members').get(memberController.getAllMembers);

    app.route('/members/id/:id').get(memberController.getMembersWithId);
};