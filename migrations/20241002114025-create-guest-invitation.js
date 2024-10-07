'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GuestInvitations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      guest_id: {
        type: Sequelize.INTEGER
      },
      invitation_id: {
        type: Sequelize.INTEGER
      },
      attendance_status: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      guest_count: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: true
      },
      attendance: {
        type: Sequelize.STRING,
        allowNull: true
      },
      check_in_time: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GuestInvitations');
  }
};