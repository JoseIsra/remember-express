const router = require("express").Router();
const userController = require("../../services/user.services");

// ROUTES SECTION
router.get("/:id", userController.getOne);

router.get("/", userController.getAll);
router.post("/new", userController.create);

module.exports = router;
