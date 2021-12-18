"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      complete: DataTypes.STRING,
      deadline: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
