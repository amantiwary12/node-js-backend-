import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.model.js";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: " enter ur email and password",
      });
    }

    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(409).json({
        message: "user already exits",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "user_registerd",
      User_ID: user._id,
    });
  } catch (err) {
    next(err);
  }
});

// login

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "enter ur detail",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        message: "invalid password",
      });
    }

    const token = jwt.sign({
      userID: user._id},
      process.env.JWT_SECRET_KEY,
      {expiredIn: "1h"} 
    );

    res.status(200).json({
      message: " login successful",
      token,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
