'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('topics', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name: {
        type: Sequelize.STRING
      },
      source_id: {
        type: Sequelize.INTEGER
      },
      source_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      type_id: {
        type: Sequelize.INTEGER
      },
      enjoyed_number: {
        type: Sequelize.INTEGER
      },
      resource_id: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('topics');
  }
};