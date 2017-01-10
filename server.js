//////Dependencies////////
var express = require('express');
var bodyParse = require('body-parser');
var path = require('path');


var PORT = 3000;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

///////ROUTES////////////

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);



////////////////////////////
app.listen(PORT, function() {
   console.log('Hi. App is listening on PORT: ' + PORT);
});
