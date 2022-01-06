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
    username: "pcihzrfwqaiitm",
    password:
      "1873a2e92f6368df404dd545b807e6d5b9e350348d52630393f64523e9aaa5fe",
    database: "d4cq44ceing8t7",
    host: "ec2-18-235-86-66.compute-1.amazonaws.com",
    port: "5432",
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  },
};
