var express = require('express'),
    app = express(),
    port = process.env.PORT || 1337;

var connector = require('./api/utils/DBConnectionSettings')

var bodyParser = require('body-parser');

var viewWaterLevelRoutes = require('./api/routes/viewWaterLevelRoute');

var memberRoutes = require('./api/routes/memberRoute');

var bloodGroupRoutes = require('./api/routes/bloodGroupRoute');

var relationRoutes = require('./api/routes/relationRoute');

var maritalStatusRoutes = require('./api/routes/maritalStatusesRoute');

var genderRoutes = require('./api/routes/genderRoute');

var loginRoutes = require('./api/routes/loginRoute');

var TestRoutes = require('./api/routes/TestRoute');

var gitChangesListener = require('./api/routes/gitChangesRoute');

var setIsElephantPresentRoutes = require('./api/routes/setIsElephantPresentRoute');

var getIsElephantPresentRoutes = require('./api/routes/getIsElephantPresentRoute');

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

viewWaterLevelRoutes(app);
gitChangesListener(app);
memberRoutes(app);
bloodGroupRoutes(app);
relationRoutes(app);
maritalStatusRoutes(app);
genderRoutes(app);
loginRoutes(app);
TestRoutes(app);
setIsElephantPresentRoutes(app);
getIsElephantPresentRoutes(app);

app.listen(port);

console.log('FAMILY RESTful API server started on: ' + port);
