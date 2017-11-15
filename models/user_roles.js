'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_roles = sequelize.define('user_roles', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV1
    },
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_roles;
};