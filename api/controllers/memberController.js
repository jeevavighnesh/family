"use strict";

var connector = require('../utils/DBConnectionSettings');

module.exports = {
    getAllMembers: function (req, resp) {
        connector.connection.query("SELECT * FROM MEMBERS", function (error, rows, fields) {
            if (!!error) {
                console.log("Error in query\n");
                console.log(error);
                resp.send(error);
            }
            else {
                resp.send(rows);
            }
        })
    },

    getMembersWithId: function (req, resp) {
        connector.connection.query("SELECT * FROM MEMBERS WHERE ID = " + req.params.id, function (error, rows, fields) {
            if (!!error){
                console.log("Error in query\n")
                console.log(error);
                resp.send(error);
            }
            else {
                resp.send(rows);
            }
        })
    }
};