'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('user_reading_logs', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      user_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      topic_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      enjoyed: {
        type: Sequelize.BOOLEAN
      },
      enjoyed_at: {
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
    return queryInterface.dropTable('user_reading_logs');
  }
};