const router = require("express").Router();
const orderController = require("../../services/orders.services");

// ROUTES SECTION
router.get("/:id", orderController.getOne);

router.get("/", orderController.getAll);
router.post("/new", orderController.create);
router.post("/item", orderController.addItem);

module.exports = router;
