'use strict';
module.exports = function (sequelize, DataTypes) {
  var resources = sequelize.define('resources', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV1
    },
    type: DataTypes.STRING,
    qiniu_uri: DataTypes.STRING,
    ali_uri: DataTypes.STRING,
    local_uri: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
  return resources;
};