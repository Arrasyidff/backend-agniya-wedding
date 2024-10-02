'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('GuestInvitations', {
      fields: ['guest_id'],
      type: 'foreign key',
      name: 'fk_guest_id',
      references: {
        table: 'Guests',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('GuestInvitations', 'fk_guest_id', {})
  }
};
