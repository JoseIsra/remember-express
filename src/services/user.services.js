const { User } = require("../models");

module.exports = {
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await User.findByPk(id, {
        include: "orders",
      });
      res.json({
        result,
      });
    } catch (error) {
      console.error(error);
    }
  },
  create: async (req, res) => {
    try {
      await User.create(req.body);
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
      const result = await User.findAll();
      res.json({
        result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  destro: async (req, res) => {
    const { id } = req.params;
    try {
      await User.destroy({
        where: {
          id,
        },
      });
      res.json({
        message: "Eliminación exitosa 🚀",
      });
    } catch (error) {
      console.log(error);
    }
  },
  login: (req, res) => {
    res.json({
      message: "welcome my friend",
      user: req.user,
    });
  },
};
