import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();


app.use("/api/auth", authRoutes);

app.use((err,req,res,next)=>{
    console.error("SERVER ERROR", err);
    res.status(500).json({message: err.message});
});


const PORT = process.env.PORT || 8000;


app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});