'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wish.belongsTo(models.Guest, {
        as: 'guest',
        foreignKey: 'guest_id',
        targetKey: 'id'
      })
    }
  }
  Wish.init({
    guest_id: DataTypes.INTEGER,
    wish: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Wish',
  });
  return Wish;
};