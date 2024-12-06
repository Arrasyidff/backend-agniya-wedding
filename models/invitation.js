'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invitation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Invitation.init({
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    guest_count: DataTypes.INTEGER,
    attendance: DataTypes.BOOLEAN,
    wish: DataTypes.TEXT,
    code_session: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Invitation',
  });
  return Invitation;
};