"use strict";

var connector = require('../utils/DBConnectionSettings');

module.exports = {
    setIsElephantPresent: function (req, resp) {
      console.log(req.params.setIsElephantPresent);
      var query = "INSERT acoustic_sensor (is_elephant_present) values(" + req.params.setIsElephantPresent + ")";
        connector.connection.query(query, function (error, rows, fields) {
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
