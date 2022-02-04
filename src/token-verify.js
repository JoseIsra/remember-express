const jwt = require("jsonwebtoken");

const secret = "myBelen";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0Mzk0MTQxNH0.kngrjh6mSyV73Yux5Awk_BZH0rgaY41HmZE-6FqlM20";

//generar token
function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log("PAYLOAD 🚀", payload);
