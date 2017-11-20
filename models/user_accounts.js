'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_accounts = sequelize.define('user_accounts', {
    type: DataTypes.STRING,
    authorization_state: DataTypes.STRING,
    level: DataTypes.INTEGER,
    expired_at: DataTypes.DATE
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_accounts;
};