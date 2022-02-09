const router = require("express").Router();
const categoryController = require("../../services/category.services");
const { errorHandler } = require("../../middlewares/errorHandler");
const validatorHandler = require("../../middlewares/validator.handler");
const { checkAdminRole } = require("../../middlewares/authHandler");
const {
  categorySchema,
  getCategorySchema,
} = require("../../schemas/category.schema");
const passport = require("passport");

// ROUTES SECTION
router.get(
  "/:id",
  [validatorHandler(getCategorySchema, "params"), errorHandler],
  categoryController.getOne
);

router.get("/", categoryController.getAll);
router.post(
  "/new",
  [
    passport.authenticate("jwt", { session: false }), // pasa el usuario con token
    checkAdminRole, // filtra si es admin o no 🤔
    validatorHandler(categorySchema, "body"),
  ],
  categoryController.create
);
router.delete(
  "/:id",
  [
    passport.authenticate("jwt", { session: false }), // pasa el usuario con token
    checkAdminRole, // filtra si es admin o no 🤔
  ],
  categoryController.destro
);

module.exports = router;
