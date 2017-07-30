"use strict";

var connector = require('../utils/DBConnectionSettings');

module.exports = {
    login: function (req, resp) {
        connector.connection.query("SELECT * FROM LOGIN WHERE MEMBER_ID=(SELECT ID FROM MEMBERS WHERE EMAIL = '" + req.body.email + "') AND PASSWORD = '" + req.body.password + "'", function (error, rows, fields) {
            if (!!error) {
                console.log("Error in query\n" + error);
                resp.send(error);
            }
            else {
                resp.send(rows);
            }
        })
    }
};