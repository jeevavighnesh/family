"use strict";

var connector = require('../utils/HOMEDBConnectionSettings');

module.exports = {
    getAllWaterLevelReadings: function (req, resp) {
        connector.connection.query("SELECT * FROM WATER_LEVEL", function (error, rows, fields) {
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