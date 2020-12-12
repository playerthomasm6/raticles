var db = require("../models");


module.exports = function(app) {

  
  app.get("/api/GamesLib", function(req, res) {
    var query = {};
    if (req.query.WishList_id, req.query.User_id) {
      query.WishListId = req.query.WishList_id;
      query.UserId = req.query.User_id
    }
  
    db.GamesLib.findAll({
      where: query,
      include: [db.WishList, db.User]
    }).then(function(dbGamesLib) {
      res.json(dbGamesLib);
    });

  });


  app.get("/api/GamesLib/:id", function(req, res) {
    
    db.GamesLib.findOne({
      where: {
        id: req.params.id

      },
      include: [db.WishList, db.User]
    }).then(function(dbGamesLib) {
      console.log(dbGamesLib);
      res.json(dbGamesLib);
    });
  });

  
  app.post("/api/GamesLib", function(req, res) {
    db.GamesLib.create(req.title).then(function(dbGamesLib) {
      res.json(dbGamesLib);
    });
  });

  app.delete("/api/GamesLib/:id", function(req, res) {
    db.GamesLib.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGamesLib) {
      res.json(dbGamesLib);
    });
  });


  app.put("/api/GamesLib", function(req, res) {
    db.GamesLib.update(
      req.title,
      {
        where: {
          id: req.title.id
        }
      }).then(function(dbGamesLib) {
      res.json(dbGamesLib);
    });
  });
};
