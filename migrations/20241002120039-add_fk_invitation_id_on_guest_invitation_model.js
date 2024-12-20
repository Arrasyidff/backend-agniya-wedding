'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('GuestInvitations', {
      fields: ['invitation_id'],
      type: 'foreign key',
      name: 'fk_invitation_id',
      references: {
        table: 'Invitations',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('GuestInvitations', 'fk_invitation_id', {})
  }
};
