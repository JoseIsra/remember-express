const { Strategy } = require("passport-local");
const authController = require("../../../services/auth.service");

const localStategy = new Strategy(
  {
    usernameField: "name",
    passwordField: "password",
  },
  (name, password, done) => {
    try {
      const user = authController.getUser(name, password);
      done(null, user);
    } catch (error) {
      done(erro, false);
    }
  }
);

module.exports = localStategy;
