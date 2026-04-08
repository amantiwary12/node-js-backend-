import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js"
import authRoutes from "./route/auth.route.js";



dotenv.config();

connectDB();

const app = express();


/*
  Global Middlewares
*/
app.use(cors()); // allow frontend access
app.use(express.json()); // parse JSON body

/*
  Database Connection
*/


/*
  Routes
*/
app.use("/api/auth", authRoutes);

/*
  Global Error Handler
*/
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.message);

  res.status(500).json({
    message: "Internal server error",
  });
});

/*
  Start Server
*/
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});