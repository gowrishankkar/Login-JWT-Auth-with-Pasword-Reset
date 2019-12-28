const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //Token Check
  if (!token) {
    res.status(401).json({ message: "Authorisation denied, no token found" });
  }

  try {
    // Token Verification
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // adding User from Payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ message: "Invalid Token" });
  }
}

module.exports = auth;
