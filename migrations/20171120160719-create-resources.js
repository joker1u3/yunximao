'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('resources', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      type: {
        type: Sequelize.STRING
      },
      qiniu_uri: {
        type: Sequelize.STRING
      },
      ali_uri: {
        type: Sequelize.STRING
      },
      local_uri: {
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
    return queryInterface.dropTable('resources');
  }
};