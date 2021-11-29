const boom = require("@hapi/boom");
const { heroSchema, getHeroSchema } = require("../schemas/hero.schema");

const temps = [
  {
    id: "1",
    name: "isra",
    hero: "spider-man",
    isBlock: true,
  },
  {
    id: "2",
    name: "omar",
    hero: "deadpool",
    isBlock: false,
  },
  {
    id: "3",
    name: "belen",
    hero: "captain america",
    isBlock: true,
  },
  {
    id: "4",
    name: "mamá Rosa",
    hero: "avengers",
    isBlock: true,
  },
  {
    id: "5",
    name: "Padre José",
    hero: "Batman",
    isBlock: false,
  },
];

module.exports = {
  getAll: (req, res) => {
    res.status(200).json(temps);
  },
  getOne: (req, res) => {
    const { id } = req.params;
    const heroFilter = temps.find((temp) => temp.id == id);
    if (!heroFilter) {
      throw boom.notFound(" Hero not exists");
    }

    if (heroFilter.isBlock) {
      throw boom.conflict("BLOCKED FOR YOU 👻");
    }

    res.status(200).json(heroFilter);
  },
  create: (req, res) => {
    res.status(201).json({
      status: res.status,
      message: "CREACIÓN EXITOSA",
      newAdded: req.body,
    });
  },
};
