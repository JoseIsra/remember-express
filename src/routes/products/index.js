const router = require("express").Router();
const productController = require("../../services/product.services");

// ROUTES SECTION
router.get("/:id", productController.getOne);

router.get("/", productController.getAll);
router.post("/new", productController.create);

module.exports = router;
