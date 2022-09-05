'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('canchas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidadjugadores: {
        type: Sequelize.INTEGER
      },
      numerocancha: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('canchas');
  }
};