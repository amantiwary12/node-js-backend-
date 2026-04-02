import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import authMiddleware from "./middleware/auth.middleware.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

await connectDB();

app.use("/api/auth", authRouter);


app.get("/api/profile", authMiddleware, (req, res) => {

  res.json({
    message: "Access granted",
    user: req.user
  });
});

  
app.use((err, req, res, next)=>{
    console.error(err);

    res.status(500).json({
        message: "Internal server error"
    });
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
});

