'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tweet.belongsTo(models.user, {
        foreignKey:"user_id",
        as:"user"
      })
    }
  };
  tweet.init({
    user_id: DataTypes.STRING,
    tweet_text: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tweet',
    underscored: true,
  });
  return tweet;
};