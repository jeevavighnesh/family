var express = require('express');
var mysql = require('mysql');
var md5 = require('md5');
var bodyParser = require('body-parser');
var exec = require('child_process').exec;
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: '',
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
      console.log("In Members");
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

app.post('/gitChanges', function(req, resp){
	console.log(req.body.pusher.name + " pushed to  " + req.body.repository.name);
  console.log("Pulling from GitHub " + req.body.repository.name + " repository");
  exec('echo "$(date): ' + req.body.pusher.name + ' pushed to ' + req.body.repository.name  + '" >> ../family_logs/info.log', exeCallback);
  exec('git -C ~/Documents/family reset --hard', exeCallback);
  exec('git -C ~/Documents/family clean -df', exeCallback);
  exec('git -C ~/Documents/family pull -f', exeCallback);
  exec('npm -C ~/Documents/family install --production', exeCallback);
  exec('sudo service rc.local restart', exeCallback);
  resp.sendStatus(200);
})

function exeCallback(err, stdout, stderr){
  if (stdout) {
    console.log(stdout);
    // exec('echo ($date)' + stdout + ' >> info.log', exeCallback);
  }
  if (stderr) {
    // exec('echo ($date)' + stderr + ' >> error.log', exeCallback);
    console.log(stderr);
  }
}

app.listen(1337);
