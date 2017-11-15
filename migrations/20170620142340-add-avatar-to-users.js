'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'avatar', {
      type: Sequelize.STRING(512)
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'avatar');
  }/**/
};
