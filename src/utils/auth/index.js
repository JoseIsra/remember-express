const passport = require("passport");
const localStategy = require("./strategies/localStrategy");

passport.use(localStategy);
