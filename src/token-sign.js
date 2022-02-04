const jwt = require("jsonwebtoken");

const secret = "myBelen";
const payload = {
  sub: 1,
  role: "customer",
};

//generar token
function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log("TOKEN", token);
