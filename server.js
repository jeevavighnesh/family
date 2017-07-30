var express = require('express'),
    app = express(),
    port = process.env.PORT || 1337;

var connector = require('./api/utils/DBConnectionSettings')

var bodyParser = require('body-parser');

var memberRoutes = require('./api/routes/memberRoute');

var bloodGroupRoutes = require('./api/routes/bloodGroupRoute');

var relationRoutes = require('./api/routes/relationRoute');

var maritalStatusRoutes = require('./api/routes/maritalStatusesRoute');

var gitChangesListener = require('./api/routes/gitChangesRoute');

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

gitChangesListener(app);
memberRoutes(app);
bloodGroupRoutes(app);
relationRoutes(app);
maritalStatusRoutes(app);

app.listen(port);

console.log('FAMILY RESTful API server started on: ' + port);