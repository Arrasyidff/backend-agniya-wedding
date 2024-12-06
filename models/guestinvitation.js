'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GuestInvitation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GuestInvitation.belongsTo(models.Guest, {
        as: 'guest',
        foreignKey: 'guest_id',
        targetKey: 'id'
      })
    }
  }
  GuestInvitation.init({
    guest_id: DataTypes.INTEGER,
    invitation_id: DataTypes.INTEGER,
    attendance_status: DataTypes.BOOLEAN,
    guest_count: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    attendance: DataTypes.STRING,
    check_in_time: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'GuestInvitation',
  });
  return GuestInvitation;
};