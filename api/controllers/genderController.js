"use strict";

var connector = require('../utils/DBConnectionSettings');

module.exports = {
    getAllGenders: function (req, resp) {
        connector.connection.query("SELECT * FROM GENDERS", function (error, rows, fields) {
            if (!!error) {
                console.log("Error in query\n");
                console.log(error);
                resp.send(error);
            }
            else {
                resp.send(rows);
            }
        })
    }
};