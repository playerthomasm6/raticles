module.exports= function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        Username: {type: DataTypes.STRING,
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
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }
    

        
    });

    User.associate = function(models) {
        User.hasOne(models.GamesLib, {
          onDelete: "cascade"
        });
        User.hasOne(models.WishList, {
            onDelete: "cascade"
        })
      };
    return User;
}