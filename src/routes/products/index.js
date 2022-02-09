const router = require("express").Router();
const productController = require("../../services/product.services");
const passport = require("passport");

// ROUTES SECTION
router.get("/:id", productController.getOne);

router.get("/", productController.getAll);
router.post(
  "/new",
  passport.authenticate("jwt", { session: false }),
  productController.create
);

module.exports = router;
