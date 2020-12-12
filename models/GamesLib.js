module.exports= function(sequelize, DataTypes) {
    var GamesLib = sequelize.define("GamesLib", {
        Title: {type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    }
    
    });

    GamesLib.associate = function(models) {
        GamesLib.belongsTo(models.User, {
          foreignKey: {
              allowNull: false
          }
        });
      };


    return GamesLib;
}