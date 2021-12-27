"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class workers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {
        foreignKey: "cat_id",
        type: DataTypes.INTEGER,
      });
    }
  }
  workers.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "workers",
    }
  );
  return workers;
};
