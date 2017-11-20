'use strict';
module.exports = function(sequelize, DataTypes) {
  var topic_types = sequelize.define('topic_types', {
    name: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return topic_types;
};