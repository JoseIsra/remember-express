const router = require("express").Router();
const roleController = require("../../services/roles.services");
const { checkRoles } = require("../../middlewares/authHandler");
const passport = require("passport");

// ROUTES SECTION
router.get("/:id", roleController.getOne);

router.get(
  "/",
  [passport.authenticate("jwt", { session: false }), checkRoles([3])],
  roleController.getAll
);
router.post("/new", roleController.create);
router.delete("/:id", roleController.destro);

module.exports = router;
