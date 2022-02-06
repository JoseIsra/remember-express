const router = require("express").Router();
const roleController = require("../../services/roles.services");

// ROUTES SECTION
router.get("/:id", roleController.getOne);

router.get("/", roleController.getAll);
router.post("/new", roleController.create);
router.delete("/:id", roleController.destro);

module.exports = router;
