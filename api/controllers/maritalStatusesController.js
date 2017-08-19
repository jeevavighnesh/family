"use strict";

var connector = require('../utils/DBConnectionSettings');

module.exports = {
    getAllMaritalStatuses: function (req, resp) {
        connector.connection.query("SELECT * FROM MARITAL_STATUSES", function (error, rows, fields) {
            if (!!error) {
                console.log("Error in query\n" + error);
            }
            else {
                resp.send(rows);
            }
        })
    }
};