const { Order, Order_Product } = require("../models");

module.exports = {
  getOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Order.findByPk(id, {
        include: [
          "user",
          {
            association: "items",
            include: ["category"],
          },
        ],
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
      await Order.create(req.body);
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
      const result = await Order.findAll();
      res.json({
        result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  addItem: async (req, res) => {
    try {
      await Order_Product.create(req.body);
      res.json({
        message: "Creación exitosa",
        data: req.body,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
