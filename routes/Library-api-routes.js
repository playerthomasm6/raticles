var db = require("../models").models


module.exports = function (app) {


  app.get("/api/Gameinfo", function (req, res) {
    var query = {};
    if (req.query.WishList_id, req.query.User_id) {
      query.WishListId = req.query.WishList_id;
      query.UserId = req.query.User_id
    }

    db.Gameinfo.findAll({
      where: query,
      include: [db.WishList, db.User]
    }).then(function (dbGameinfo) {
      res.json(dbGameinfo);
    });

  });


  app.get("/api/Gameinfo/:id", function (req, res) {

    db.Gameinfo.findOne({
      where: {
        id: req.params.id

      },
      include: [db.WishList, db.User]
    }).then(function (dbGameinfo) {
      console.log(dbGameinfo);
      res.json(dbGameinfo);
    });
  });


  app.post("/api/Gameinfo", function (req, res) {
    db.Gameinfo.create(req.title).then(function (dbGameinfo) {
      res.json(dbGameinfo);
    });
  });

  app.delete("/api/Gameinfo/:id", function (req, res) {
    db.Gameinfo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbGameinfo) {
      res.json(dbGameinfo);
    });
  });


  app.put("/api/Gameinfo", function (req, res) {
    db.Gameinfo.update(
      req.title,
      {
        where: {
          id: req.title.id
        }
      }).then(function (dbGameinfo) {
        res.json(dbGameinfo);
      });
  });
};
