"use strict";

var connector = require('../utils/DBConnectionSettings');

module.exports = {
    getAllRelations: function (req, resp) {
        connector.connection.query("SELECT * FROM RELATIONS", function (error, rows, fields) {
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