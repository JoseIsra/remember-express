//librerias APIS Y DBS
const { Client } = require("pg");

const getConnection = async () => {
  const client = new Client({
    user: "israel",
    host: "localhost",
    database: "marvel_world",
    password: "isra321",
    port: 5432,
  });
  await client.connect();
  console.log("conexión DB DONE 👻");
  return client;
};

module.exports = getConnection;
