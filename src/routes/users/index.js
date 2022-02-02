const router = require("express").Router();
const userController = require("../../services/user.services");
const passport = require("passport");

// ROUTES SECTION
router.get("/:id", userController.getOne);

router.get("/", userController.getAll);
router.post("/new", userController.create);
router.delete("/:id", userController.destro);
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  userController.login
);

module.exports = router;
