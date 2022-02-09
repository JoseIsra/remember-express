const { User } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
    const user = req.user;
    const payload = {
      sub: user.id,
      role: user.role_id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.json({
      user,
      token,
    });
  },
};
