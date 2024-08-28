const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;

export default function generateToken(user: { username: any; id: any }) {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, {
    expiresIn: "1h",
  });
}
