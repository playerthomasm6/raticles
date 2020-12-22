module.exports = function (sequelize, DataTypes) {
    var Gameinfo = sequelize.define("Gameinfo", {

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
        Gamesum: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }



        }

    });

    Gameinfo.associate = function (models) {
        Gameinfo.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        }),

            GameInfo.belongsTo(models.WishList, {
                foreignKey: {
                    allonwNull: false
                }
            })

    };
    return Gameinfo;
};

