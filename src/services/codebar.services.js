const { Codebar, Product } = require("../models");

module.exports = {
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Codebar.findByPk(id);
      res.json({
        result,
      });
    } catch (error) {
      console.error(error);
    }
  },
  create: async (req, res) => {
    try {
      await Codebar.create(req.body, {
        include: "secret",
      });
      res.status(200).json({
        message: "Creación exitosa",
        data: req.body,
      });
    } catch (error) {
      console.error(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await Codebar.findAll({
        include: ["secret"],
      });
      res.json({
        result,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
