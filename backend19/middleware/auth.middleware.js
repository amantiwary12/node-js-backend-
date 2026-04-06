import jwt from "jsonwebtoken";

const authmiddleware = (req, res, next) => {
  try {
    const authHeader = req.header.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "invalid token formate" });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECURITY_KEY,
    );
    req.user_ID = decoded.userID;

    next();
  } catch (err) {
    return res.status(401).json({ message: "unauthorized" });
  }
};

export default authmiddleware;
