module.exports = function (sequelize, DataTypes) {
    var GameInfo = sequelize.define("GameInfo", {

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

    GameInfo.associate = function (models) {
        GameInfo.belongsTo(models.User, {
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
    return GameInfo;
};

