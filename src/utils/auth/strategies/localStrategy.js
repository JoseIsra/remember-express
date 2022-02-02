const { Strategy } = require("passport-local");
const { User } = require("../../../models");
const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");

const localStategy = new Strategy(
  {
    usernameField: "name",
    passwordField: "password",
  },
  async (name, password, done) => {
    console.log("PASSPORT ZONE", name, password);
    const user = await User.findOne({
      where: {
        name,
      },
    });

    if (!user) {
      done(boom.unauthorized(), false);
    }

    // comparamos el hash del usuario
    const hashed = await bcrypt.compare(password, user.password_hash);
    if (!hashed) {
      // si no coinciden
      done(boom.unauthorized(), false);
    }
    delete user.dataValues.password_hash; // para remover el campo password_hash de la respuesta, solo es visual
    done(null, user);
  }
);

module.exports = localStategy;
