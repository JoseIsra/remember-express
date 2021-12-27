const router = require("express").Router();
const workerController = require("../../services/worker.services");

// ROUTES SECTION
router.get("/:id", workerController.getOne);

router.get("/", workerController.getAll);
router.post("/new", workerController.create);

module.exports = router;
