import express from "express";
import bcrypt from "bcrypt";
import User from "../model/user.model.js";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: " enter email and password",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "user already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "user registered",
      userId: user._id,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
