const router = require("express").Router();

//  ALL AVAILABLE ROUTES IN THE APP
const categoryRouter = require("./categories");
const workersRouter = require("./workers");

// GENERAL USE OF ALL ROUTES
function routerApi(app) {
  app.use("/api/v1", router); // declaración ruta maestra
  router.use("/categories", categoryRouter); // sería /api/v1/categories ...
  router.use("/workers", workersRouter); // sería /api/v1/enemy ...
}

//DONT FORGET TO MODULE.EXPORTS = SOMESHIT
module.exports = routerApi;
