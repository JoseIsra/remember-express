require("dotenv").config();
module.exports = {
  development: {
    username: "israel",
    password: "isra321",
    database: "marvel_world",
    port: "5432",
    host: "localhost",
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
