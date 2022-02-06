"use strict";

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Roles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
    });
    await queryInterface.createTable("Categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
    });
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password_hash: {
        type: Sequelize.STRING,
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Roles",
          key: "id",
        },
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      cat_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.createTable("Codebars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      prod_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        allowNull: false,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
    });
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.createTable("Order_Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Orders",
          key: "id",
        },
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Roles");
    await queryInterface.dropTable("Categories");
    await queryInterface.dropTable("Users");
    await queryInterface.dropTable("Products");
    await queryInterface.dropTable("Codebars");
    await queryInterface.dropTable("Orders");
    await queryInterface.dropTable("Order_Products");
  },
};
