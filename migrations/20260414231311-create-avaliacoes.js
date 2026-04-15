'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('avaliacoes', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      pedido_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'pedidos',
          key: 'id'
        },

        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      nota: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5
        }
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {

    await queryInterface.dropTable('avaliacoes');
  }
};
