var express = require('express');
var mysql = require('mysql');
var md5 = require('md5');
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: 'quarter#9112',
	database: 'FAMILY'
});

connection.connect(function (error) {
	if (!!error) {
		console.log("Error");
	}
	else {
		console.log("Connected");
	}
});

app.get('/relations', function(req, resp){
	connection.query("SELECT * FROM RELATIONS", function(error, rows, fields){
		if(!!error){
			console.log("Error in query\n" + error);
		}
		else {
			resp.send(rows);
		}
	})
})

app.get('/bloodGroups', function(req, resp){
	connection.query("SELECT * FROM BLOOD_GROUPS", function(error, rows, fields){
		if(!!error){
			console.log("Error in query\n" + error);
		}
		else {
			resp.send(rows);
		}
	})
})

app.get('/maritalStatuses', function(req, resp){
	connection.query("SELECT * FROM MARITAL_STATUSES", function(error, rows, fields){
		if(!!error){
			console.log("Error in query\n" + error);
		}
		else {
			resp.send(rows);
		}
	})
})

app.get('/genders', function(req, resp){
	connection.query("SELECT * FROM GENDERS", function(error, rows, fields){
		if(!!error){
			console.log("Error in query\n" + error);
		}
		else {
			resp.send(rows);
		}
	})
})

app.get('/members', function(req, resp){
	connection.query("SELECT * FROM MEMBERS", function(error, rows, fields){
		if(!!error){
			console.log("Error in query\n" + error);
		}
		else {
			resp.send(rows);
		}
	})
})

app.post('/login', function(req, resp){
	connection.query("SELECT * FROM LOGIN WHERE MEMBER_ID=(SELECT ID FROM MEMBERS WHERE EMAIL = '" + req.body.email + "') AND PASSWORD = '" + req.body.password + "'" , function(error, rows, fields){
		if(!!error){
			console.log("Error in query\n" + error);
		}
		else {
			resp.send(rows);
		}
	})
})

app.listen(1337);
