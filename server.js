// _______________________________________________________________________________
// Server.js - This file is the initial starting point for the Node/Express server.
// _______________________________________________________________________________


// ---------------------------
//         DEPENDENCIES
// ---------------------------
var express = require("express");
var session = require("express-session");

var passport = require("./config/passport");


// ---------------------------------
//      Sets up the Express App
// ---------------------------------
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// ---------------------------------------
//                Routes
//----------------------------------------

require("./routes/api-routes.js")(app);
require("./routes/User-api-routes.js")(app); // example routes
require("./routes/Wish-api-routes.js")(app);
require("./routes/Library-api-routes.js")(app);
require("./routes/html-routes.js")(app);

// ----------------------------------------------------------------------
//    Syncing our sequelize models and then starting our Express app
// ----------------------------------------------------------------------
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});