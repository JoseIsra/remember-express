const { User } = require("../models");
const authController = require("./auth.service");
const boom = require("@hapi/boom");

module.exports = {
  updateUser: async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) throw boom.notFound();

    try {
      await User.update(req.body, {
        where: {
          email: user.email,
        },
      });
      res.json({ message: "Usuario actualizado" });
    } catch (error) {
      throw next(error);
    }
  },
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
      const resp = await authController.sendRecovery(email);
      res.json(resp);
    } catch (error) {
      next(error);
    }
  },
  updatingPassword: async (req, res, next) => {
    const { token, newPassword } = req.body;
    await authController.changePassword(token, newPassword);
  },
};
