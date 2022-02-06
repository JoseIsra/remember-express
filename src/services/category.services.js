//modelol
const { Category } = require("../models");

const boom = require("@hapi/boom");

module.exports = {
  getAll: async (req, res) => {
    try {
      // const fields = await Category.findAll({
      //   include: "product",
      // });
      const fields = await Category.findAll();
      if (!fields.length) {
        res.json({
          message: "Aún no hay campos para mostrar 👻",
        });
        return;
      }
      res.json(fields);
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const row = await Category.findByPk(id);
      res.json({
        message: "Campo encontrado 👻",
        data: row,
      });
    } catch (error) {
      console.error("Error", error);
    }
  },
  create: async (req, res) => {
    await Category.create(req.body);
    res.status(201).json({
      status: res.status,
      message: "CREACIÓN EXITOSA",
      newCategory: req.body,
    });
  },
};
