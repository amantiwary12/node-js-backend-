import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../config/db.js";
import authRoutes from "./auth.route.js";

dotenv.config();

const app = express();

/* middlewares */
app.use(cors());
app.use(express.json());

/* database connection */
connectDB();

/* routes */
app.use("/api/auth", authRoutes);


/* error handler */
app.use((err,req,res,next)=>{

  console.error(err);

  res.status(500).json({
    message:"Server error"
  });

});


const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`);
});