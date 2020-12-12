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
                len: [1, 140]
            }
        },

        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        First_name: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        Last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }
    

        
    });

    User.associate = function(models) {
        User.hasMany(models.GamesLib, models.WishList, {
          onDelete: "cascade"
        });
      };
    return User;
}