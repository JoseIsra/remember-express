const router = require("express").Router();
const myHero = require("../../services/hero.services");
const { logErrors, errorHandler } = require("../../middlewares/errorHandler");
const validatorHandler = require("../../middlewares/validator.handler");
const { heroSchema, getHeroSchema } = require("../../schemas/hero.schema");

// ROUTES SECTION
router.get(
  "/:id",
  [validatorHandler(getHeroSchema, "params"), errorHandler],
  myHero.getOne
);

router.get("/", myHero.getAll);
router.post("/new", validatorHandler(heroSchema, "body"), myHero.create);

module.exports = router;
