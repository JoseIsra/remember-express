"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Codebar, {
        as: "codebar",
        foreignKey: "prod_id",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      });

      this.belongsTo(models.Category, {
        as: "category",
        foreignKey: "cat_id",
        type: DataTypes.INTEGER,
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      cat_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
