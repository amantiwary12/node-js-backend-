import User from "../models/User.model.js";

/*
  Role Middleware
  - Restricts access based on role
  - Example: admin-only routes
*/

const allowRoles = (...roles) => {
  return async (req, res, next) => {
    try {

      const user = await User.findById(req.userId);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      // Check if role allowed
      if (!roles.includes(user.role)) {
        return res.status(403).json({
          message: "Access denied",
        });
      }

      req.currentUser = user;

      next();

    } catch (err) {
      return res.status(500).json({
        message: "Server error",
      });
    }
  };
};

export default allowRoles;