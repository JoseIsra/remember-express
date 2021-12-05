const { QueryTypes } = require("sequelize");
const sequelize = require("../libs/sequelize");

const temps = [
  {
    id: "1",
    name: "THANOS",
  },
  {
    id: "2",
    name: "GREEN GLOBIN",
  },
  {
    id: "3",
    name: "DR. OCTOPUS",
  },
  {
    id: "4",
    name: "ELECTRO",
  },
  {
    id: "5",
    name: "CARNAGE",
  },
];

module.exports = {
  getOne: (req, res) => {
    const { id } = req.params;
    const result = temps.find((i) => i.id == id);
    res.json(result);
  },
  getAll: async (req, res) => {
    const results = await sequelize.query("SELECT * FROM HEROES", {
      type: QueryTypes.SELECT,
    });
    console.log("RESULTADO DE SEQUELIZE 👻", results);
    res.json({
      message: "TODOS LOS ENEMIGOS",
      data: temps,
    });
  },
};
