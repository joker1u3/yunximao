'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_reading_logs = sequelize.define('user_reading_logs', {
    user_id: DataTypes.STRING,
    topic_id: DataTypes.STRING,
    enjoyed: DataTypes.BOOLEAN,
    enjoyed_at: DataTypes.DATE
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_reading_logs;
};