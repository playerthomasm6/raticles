var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        Username: {
            type: DataTypes.STRING,
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
        Firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        Lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }

    });

    User.prototype.validPassword = function (Password) {
        return bcrypt.compareSync(Password, this.Password);
    };

    User.addHook("beforeCreate", function (user) {
        user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(10), null);
    });

    User.associate = function (models) {
        User.hasOne(models.WishList, {
            onDelete: "cascade"
        }),
            User.hasOne(models.GameInfo, {
                onDelete: "cascade"
            });
    };
    return User;
}