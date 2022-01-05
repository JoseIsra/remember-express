const router = require("express").Router();

//  ALL AVAILABLE ROUTES IN THE APP
const categoryRouter = require("./categories");
const productRouter = require("./products");
const codebarRouter = require("./codebars");
const userRouter = require("./users");
const orderRouter = require("./orders");

// GENERAL USE OF ALL ROUTES
function routerApi(app) {
  app.use("/api/v1", router); // declaración ruta maestra
  router.use("/category", categoryRouter); // sería /api/v1/category ...
  router.use("/product", productRouter); // sería /api/v1/product ...
  router.use("/codebar", codebarRouter); // sería /api/v1/codebar ...
  router.use("/user", userRouter); // sería /api/v1/user ...
  router.use("/order", orderRouter); // sería /api/v1/order ...
}

//DONT FORGET TO MODULE.EXPORTS = SOMESHIT
module.exports = routerApi;
