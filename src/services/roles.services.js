const { Role } = require("../models");

module.exports = {
  getAll: async (req, res) => {
    const result = await Role.findAll();
    if (!result.length) {
      res.json({
        message: "sin resultados",
      });
      return;
    }
    res.json({
      result,
    });
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    const result = await Role.findByPk(id);
    if (!result) {
      res.json({
        message: "Sin resultados",
      });
      return;
    }
    res.json({
      result,
    });
  },
  create: async (req, res) => {
    try {
      await Role.create(req.body);
      res.json({
        message: "Creación exitosa",
        data: req.body,
      });
    } catch (error) {
      res.json({
        error,
      });
    }
  },
  destro: async (req, res) => {
    const { id } = req.params;
    try {
      await Role.destroy({
        where: {
          id,
        },
      });
      res.json({
        message: "Eliminación exitosa",
      });
    } catch (error) {
      res.json({
        error,
      });
    }
  },
};
