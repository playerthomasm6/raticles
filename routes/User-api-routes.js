//  _________________________
// |                         |
// |     USER API ROUTES     |
// |_________________________|

var db = require("../models")

var passport = require("../config/passport");


module.exports = function(app) {
    app.get("/api/users", function(req, res) {
      db.User.findAll({
        include: [db.GamesLib, db.WishList]
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.get("/api/users/:id", function(req, res) {
      db.User.findOne({
        where: {
          id: req.params.id
        },
        include: [db.User, db.GamesLib, db.WishList]
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
    // changed route from /api/users to /api/create-user
    app.post("/api/create-users", function(req, res) {
      db.User.create(req.body).then(function(dbUser) {
        res.json(dbUser);
      });
    });
    
<<<<<<< HEAD
     app.post("/api/users", passport.authenticate("local"), function (req,res) {
       res.json(req.User);
     });
=======
    // app.post("/api/login", passport.authenticate("local"), function (req,res) {
    //   console.log(req.user);

    //   res.json(req.user);
      
    // });
>>>>>>> 62b86016077009c1417c8e90e10b91b7f9a8c369
  
    app.delete("/api/users/:id", function(req, res) {
      db.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
  };