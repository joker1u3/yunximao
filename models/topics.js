'use strict';
module.exports = function(sequelize, DataTypes) {
  var topics = sequelize.define('topics', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV1
    },
    name: DataTypes.STRING,
    source_id: DataTypes.INTEGER,
    source_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type_id: DataTypes.INTEGER,
    enjoyed_number: DataTypes.INTEGER,
    resource_id: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return topics;
};