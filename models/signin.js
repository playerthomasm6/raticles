var bcrypt = require("bcryptjs");


module.exports= function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
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
                len: [1, 140],
                isEmail: true
            }
        },  
    });

    User.prototype.validPassword = function(Password) {
        return bcrypt.compareSync(Password, this.Password);
    };

    User.addHook("beforeCreate", function(user) {
        user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(10), null);
    });

    User.associate = function(models) {
        User.hasOne(models.WishList, {
          onDelete: "cascade"
        }),
        User.hasOne(models.GamesLib, {
            onDelete: "cascade"
        });
      };
    return User;
}