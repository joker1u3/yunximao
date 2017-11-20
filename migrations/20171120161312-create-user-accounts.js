'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('user_accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      account: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      authorization_state: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      expired_at: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('user_accounts');
  }
};