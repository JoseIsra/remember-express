const boom = require("@hapi/boom");
require("dotenv").config();

function checkApiKey(req, res, next) {
  const apiKey = req.headers["api"];
  if (apiKey == process.env.API_KEY) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

module.exports = { checkApiKey };
