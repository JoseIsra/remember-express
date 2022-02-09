/* El ExtractJwt es para extraer
el token jwt
 */
require("dotenv").config();

const { Strategy, ExtractJwt } = require("passport-jwt");
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

/* 
payload {
  sub: user.id,
  role: user.role_id, -> role 2 = admin 
}
*/
const jwtStrategy = new Strategy(options, (jwt_payload, done) => {
  done(null, jwt_payload);
});

module.exports = jwtStrategy;
