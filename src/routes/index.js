const router = require("express").Router();

//  ALL AVAILABLE ROUTES IN THE APP
const categoryRouter = require("./categories");
const productRouter = require("./products");
const codebarRouter = require("./codebars");

// GENERAL USE OF ALL ROUTES
function routerApi(app) {
  app.use("/api/v1", router); // declaración ruta maestra
  router.use("/category", categoryRouter); // sería /api/v1/categories ...
  router.use("/product", productRouter); // sería /api/v1/enemy ...
  router.use("/codebar", codebarRouter); // sería /api/v1/codebar ...
}

//DONT FORGET TO MODULE.EXPORTS = SOMESHIT
module.exports = routerApi;
