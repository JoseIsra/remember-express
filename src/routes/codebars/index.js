const router = require("express").Router();
const codebarController = require("../../services/codebar.services");

// ROUTES SECTION
router.get("/:id", codebarController.getOne);

router.get("/", codebarController.getAll);
router.post("/new", codebarController.create);

module.exports = router;
