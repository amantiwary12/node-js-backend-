import jwt from "jsonwebtoken";

/*
  Authentication Middleware
  - Verifies JWT token
  - Extracts userId
*/

const authMiddleware = (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    // No token
    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // Extract token → "Bearer token"
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Invalid token format",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach userId to request
    req.userId = decoded.userID;

    next();

  } catch (err) {

    return res.status(401).json({
      message: "Unauthorized",
    });

  }
};

export default authMiddleware;