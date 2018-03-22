"use strict";

var connector = require('../utils/DBConnectionSettings');

module.exports = {
    getIsElephantPresent: function (req, resp) {
      var query = "SELECT * FROM acoustic_sensor ORDER BY last_updated_time_stamp DESC LIMIT 1";
        connector.connection.query(query, function (error, rows, fields) {
            if (!!error) {
                console.log("Error in query\n");
                console.log(error);
                resp.send(error);
            }
            else {
                if(rows[0] === undefined){
                  resp.send("No data check sensor!!!");
                } else if (rows[0].is_elephant_present === 1) {
                  resp.send("Elephant is present\nLast Updated on:\t" + rows[0].last_updated_time_stamp);
                } else {
                  resp.send("Elephant is not present. We're safe.\nLast Updated on:\t" + rows[0].last_updated_time_stamp);
                }
            }
        })
    }
};
