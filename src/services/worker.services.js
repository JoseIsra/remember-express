// const sequelize = require("../libs/sequelize");
const { workers, Category } = require("../models");

module.exports = {
  getOne: (req, res) => {},
  create: async (req, res) => {
    await workers.create(req.body);
    res.json({
      message: "Creación exitosa",
      data: req.body,
    });
  },
  getAll: async (req, res) => {
    try {
      const result = await workers.findAll({
        include: Category,
      });
      res.json({
        result,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
