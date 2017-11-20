'use strict';
module.exports = function(sequelize, DataTypes) {
  var sources = sequelize.define('sources', {
    name: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sources;
};