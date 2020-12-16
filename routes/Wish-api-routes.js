var db = require("../models");


module.exports = function(app) {

  
  app.get("/api/WishList", function(req, res) {
    var query = {};
    if (req.query.GamesLib_id, req.query.User_id) {
      query.GamesLibId = req.query.GamesLib_id;
      query.UserId = req.query.User_id
    }
  
    db.WishList.findAll({
      where: query,
      include: [db.GamesLib, db.User]
    }).then(function(dbWishList) {
      res.json(dbWishList);
    });

  });


  app.get("/api/WishList/:id", function(req, res) {
    
    db.WishList.findOne({
      where: {
        id: req.params.id

      },
      include: [db.GamesLib, db.User]
    }).then(function(dbWishList) {
      console.log(dbWishList);
      res.json(dbWishList);
    });
  });

  
  app.post("/api/WishList", function(req, res) {
    db.WishList.create(req.title).then(function(dbWishList) {
      res.json(dbWishList);
    });
  });

  app.delete("/api/WishList/:id", function(req, res) {
    db.WishList.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbWishList) {
      res.json(dbWishList);
    });
  });


  app.put("/api/WishList", function(req, res) {
    db.WishList.update(
      req.title,
      {
        where: {
          id: req.title.id
        }
      }).then(function(dbWishList) {
      res.json(dbWishList);
    });
  });
};