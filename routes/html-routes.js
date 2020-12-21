//  _________________________
// |                         |
// |        HTML ROUTES      |
// |_________________________|

// DEPENDENCIES
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated.js")

// ROUTES

module.exports = function(app) {
    // INDEX HTML
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // CREATE USER HTML
    app.get("/create-user", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/createuser.html"));
    });

    // GAME INFO HTML
    app.get("/game-info", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/gameinfo.html"));
    });

    // WISHLIST HTML
    app.get("/wish-list", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/wishlist.html"));
    });
    
};