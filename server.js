// Your server.js file should require the basic npm packages 
// we've used in class: express, body-parser and path.

var express = require("express");

var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/app', express.static('app'))

require ("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);





app.listen(PORT,function(){
    console.log("server listening");
});