"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, {
        as: "orders",
        foreignKey: "user_id",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      });
      this.belongsTo(models.Role, {
        as: "roles",
        foreignKey: "role_id",
        type: DataTypes.INTEGER,
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password_hash: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      role_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate(async (user) => {
    const result = await bcrypt.hash(user.password, 10);
    user.password_hash = result;
  });
  return User;
};
