const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.headers["auth-token"];

  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
