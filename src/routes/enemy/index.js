const router = require("express").Router();
const myEnemy = require("../../services/enemy.services");

// ROUTES SECTION
router.get("/:id", myEnemy.getOne);

router.get("/", myEnemy.getAll);

module.exports = router;
