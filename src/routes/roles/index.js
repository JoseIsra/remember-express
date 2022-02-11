const router = require("express").Router();
const roleController = require("../../services/roles.services");
const { checkRoles, checkAdminRole } = require("../../middlewares/authHandler");
const passport = require("passport");

// ROUTES SECTION
router.get("/:id", roleController.getOne);

router.get(
  "/",
  [passport.authenticate("jwt", { session: false }), checkRoles([1, 2])],
  roleController.getAll
);
router.post(
  "/new",
  [passport.authenticate("jwt", { session: false }), checkAdminRole],
  roleController.create
);
router.delete("/:id", roleController.destro);

module.exports = router;
