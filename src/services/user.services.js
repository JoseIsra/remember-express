const { User } = require("../models");
const authController = require("./auth.service");

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
      const result = await User.findAll({
        include: "roles",
      });
      if (!result.length) {
        res.json({
          message: "No hay registros",
        });
        return;
      }
      res.json({
        result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  destro: async (req, res, next) => {
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
      next(error);
    }
  },
  login: (req, res) => {
    const { user, token } = authController.signToken(req.user);
    res.json({
      user,
      token,
    });
  },
  recover: async (req, res, next) => {
    try {
      const { email } = req.body;
      const resp = await authController.sendEmail(email);
      res.json(resp);
    } catch (error) {
      next(error);
    }
  },
};
