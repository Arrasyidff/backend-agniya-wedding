'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Guest.hasMany(models.GuestInvitation, {
        foreignKey: "guest_id",
        sourceKey: "id"
      })
    }
  }
  Guest.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    acquaintance_from: DataTypes.STRING,
    address: DataTypes.TEXT,
    additional_notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Guest',
  });
  return Guest;
};