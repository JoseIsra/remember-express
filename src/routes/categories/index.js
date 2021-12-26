const router = require("express").Router();
const categoryController = require("../../services/category.services");
const { errorHandler } = require("../../middlewares/errorHandler");
const validatorHandler = require("../../middlewares/validator.handler");
const {
  categorySchema,
  getCategorySchema,
} = require("../../schemas/category.schema");

// ROUTES SECTION
router.get(
  "/:id",
  [validatorHandler(getCategorySchema, "params"), errorHandler],
  categoryController.getOne
);

router.get("/", categoryController.getAll);
router.post(
  "/new",
  validatorHandler(categorySchema, "body"),
  categoryController.create
);

module.exports = router;
