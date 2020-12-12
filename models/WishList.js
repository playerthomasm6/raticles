module.exports= function(sequelize, DataTypes) {
    var WishList = sequelize.define("WishList", {
        Title: {type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    }
    

        
    });

    WishList.associate = function(models) {
        WishList.belongsTo(models.GamesLib, { 
          foreignKey: {
            allowNull: false
          }
        });
      };


    return WishList;
}