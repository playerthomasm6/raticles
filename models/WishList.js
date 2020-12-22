module.exports = function (sequelize, DataTypes) {
  var WishList = sequelize.define("WishList", {
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    CoverUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    GameId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }



  });

  WishList.associate = function (models) {
    WishList.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return WishList;
}