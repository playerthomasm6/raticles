module.exports= function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        Username: {type :DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                leng: [1, 140]
            }
        }
    

        
    });

    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.GamesLib, models.WishList, {
          onDelete: "cascade"
        });
      };
    return User;
}