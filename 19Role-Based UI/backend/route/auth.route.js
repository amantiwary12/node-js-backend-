import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.model.js";
import authMiddleware from "../middleware/auth.middleware.js";
import allowRoles from "../middleware/role.middleware.js";

const router = express.Router();



/* ================= REGISTER ================= */

router.post("/register", async (req, res, next) => {
  try {

    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered",
      userID: user._id,
    });

  } catch (err) {
    next(err);
  }
});



/* ================= LOGIN ================= */

router.post("/login", async (req, res, next) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Create token
    const token = jwt.sign(
      { userID: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
    });

  } catch (err) {
    next(err);
  }
});



/* ================= PROFILE (PROTECTED) ================= */

router.get("/profile", authMiddleware, async (req, res, next) => {
  try {

    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "Profile fetched",
      user,
    });

  } catch (err) {
    next(err);
  }
});


// search bar route 
router.get(
  "/users/search",
  authMiddleware,
  allowRoles("admin"),
  async (req, res) => {

    const { email } = req.query;

    const users = await User.find({
      email: { $regex: email, $options: "i" }
    });

    res.json(users);
  }
);



//admin created routes 
router.post(
  "/create-admin",
  authMiddleware,
  allowRoles("admin"),
  async (req, res) => {

    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await User.create({
      email,
      password: hashedPassword,
      role: "admin"
    });

    res.json({ message: "Admin created" });
  }
);



router.get(
  "/users",
  authMiddleware,
  allowRoles("admin"),
  async (req, res) => {

    const users = await User.find().select("-password");

    res.json(users);
  }
);


/* ================= ADMIN ONLY ================= */

router.delete(
  "/delete-user/:id",
  authMiddleware,
  allowRoles("admin"), // 🔥 only admin allowed
  async (req, res, next) => {
    try {

      await User.findByIdAndDelete(req.params.id);

      res.json({
        message: "User deleted",
      });

    } catch (err) {
      next(err);
    }
  }
);

export default router;