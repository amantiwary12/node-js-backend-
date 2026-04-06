import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import connectDB from "./config/db.js";
import authRoute from "./routes/auth.route.js";


dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoute);


app.use((err, req, res , next)=>{

    console.error(err.message);

    res.status(500).json({message: "server error"});
});


const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})