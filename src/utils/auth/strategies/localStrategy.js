const { Strategy } = require("passport-local");
const authController = require("../../../services/auth.service");

const localStategy = new Strategy(
  {
    usernameField: "name",
    passwordField: "password",
  },
  async (name, password, done) => {
    try {
      const user = await authController.getUser(name, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = localStategy;
