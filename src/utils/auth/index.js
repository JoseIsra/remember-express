const passport = require("passport");
const localStategy = require("./strategies/localStrategy");
const jwtStrategy = require("./strategies/jwtStrategy");

passport.use(localStategy);
passport.use(jwtStrategy);
