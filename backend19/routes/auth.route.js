import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import authmiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Register route
router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "all field are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User registerd successfully", user_ID: user._id });
  } catch (err) {
    next(err);
  }
});

//login route

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "field all the detail" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "email not found" });
    }

    const isMarch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(4001).json({ message: "invalid password" });
    }

    const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "login successful", token });
  } catch (err) {
    next(err);
  }
});

//profile route (protected)

router.get("/profile", authmiddleware, async (req, res, next) => {
  try {
    const user = await User.findById(req.user_ID).select("-password");
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    res.json({ message: "profile fetched", user });
  } catch (err) {
    next(err);
  }
});

//admin only route

router.delete("/delete-user/:id", authmiddleware, async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.user.Id);
    if (currectUser.role !== "admin") {
      return res.status(403).json({ message: "assess denied" });
    }

    await User.findByIdAndDelete(req.params.id);

    res.json({ message: "user deleted successfully" });
  } catch (err) {
    next(err);
  }
});

export default router;
