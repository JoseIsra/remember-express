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

function checkAdminRole(req, res, next) {
  const user = req.user;
  if (user.role != 2) {
    return next(boom.unauthorized());
  }
  next();
}

const checkRoles = (roles) => (req, res, next) => {
  const roleId = req.user.role;
  if (!roles.includes(roleId)) {
    return next(boom.unauthorized());
  }
  next();
};

module.exports = { checkApiKey, checkAdminRole, checkRoles };
