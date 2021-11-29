const router = require("express").Router();

//  ALL AVAILABLE ROUTES IN THE APP
const heroRouter = require("./heros");

// GENERAL USE OF ALL ROUTES
function routerApi(app) {
  app.use("/api/v1", router); // declaración ruta maestra
  router.use("/heros", heroRouter); // sería /api/v1/heros ...
}

//DONT FORGET TO MODULE.EXPORTS = SOMESHIT
module.exports = routerApi;
