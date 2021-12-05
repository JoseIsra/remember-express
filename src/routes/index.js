const router = require("express").Router();

//  ALL AVAILABLE ROUTES IN THE APP
const heroRouter = require("./heros");
const enemyRouter = require("./enemy");

// GENERAL USE OF ALL ROUTES
function routerApi(app) {
  app.use("/api/v1", router); // declaración ruta maestra
  router.use("/heros", heroRouter); // sería /api/v1/heros ...
  router.use("/enemy", enemyRouter); // sería /api/v1/enemy ...
}

//DONT FORGET TO MODULE.EXPORTS = SOMESHIT
module.exports = routerApi;
