// _______________________________________________________________________________
// Server.js - This file is the initial starting point for the Node/Express server.
// _______________________________________________________________________________


// _______________________________________________________________________________
// DEPENDENCIES
// _______________________________________________________________________________
var express = require("express");



// Sets up the Express App
// _____________________________________________________________________________
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/User-api-routes.js")(app); // example routes
require("./routes/Wish-api-routes.js")(app);
require("./routes/Library-api-routes.js")(app),

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});