const { Product, Codebar } = require("../models");

module.exports = {
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Product.findByPk(id);
      res.json({
        result,
      });
    } catch (error) {
      console.error(error);
    }
  },
  create: async (req, res) => {
    try {
      await Product.create(req.body, {
        include: "codebar",
      });
      res.json({
        message: "Creación exitosa",
        data: req.body,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await Product.findAll({
        include: ["codebar", "category"],
      });
      res.json({
        result,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
