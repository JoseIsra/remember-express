const router = require("express").Router();
const orderController = require("../../services/orders.services");
const passport = require("passport");

// ROUTES SECTION

router.get("/", orderController.getAll);
router.post("/new", orderController.create);
router.post("/item", orderController.addItem);
router.get(
  "/myorders",
  passport.authenticate("jwt", { session: false }),
  orderController.findOrderByUser
);
router.get("/:id", orderController.getOne);

module.exports = router;
