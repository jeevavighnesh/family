var express = require('express'),
    app = express(),
    port = process.env.PORT || 1337;

var connector = require('./api/utils/DBConnectionSettings')

var bodyParser = require('body-parser');

var memberRoutes = require('./api/routes/memberRoute');

var bloodGroupRouts = require('./api/routes/bloodGroupRoute');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

connector.connection.connect(function (error) {
    if (!!error) {
        console.log(error);
    } else
        console.log("Connected");
});

memberRoutes(app);
bloodGroupRouts(app);

app.listen(port);

console.log('FAMILY RESTful API server started on: ' + port);