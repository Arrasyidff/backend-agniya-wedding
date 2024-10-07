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
    static associate(models) {
      // define association here
      Invitation.hasMany(models.GuestInvitation, {
        foreignKey: "invitation_id",
        sourceKey: "id"
      })
      Invitation.hasMany(models.Wish, {
        foreignKey: "invitation_id",
        sourceKey: "id"
      })
    }
  }
  Invitation.init({
    event_date: DataTypes.BIGINT,
    event_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Invitation',
  });
  return Invitation;
};