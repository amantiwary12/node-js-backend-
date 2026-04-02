import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';


const router = express.Router();

// register route 

router.post("/register", async (req, res , next)=>{

    try{
const {email, password} = req.body;

if(!email || ! password){
    return res.status(400).json({
        message: "enter ur pass email"
    });
}

const existingUser = await User.findOne({email});
if(existingUser){
    return res.status(409).json({
        message: "user alreaty exist"
    });
}

const hashedPassword = await bcrypt.hash(password, 10);

const user  = await User.create({
    email,
    password: hashedPassword
});

res.status(201).json({
    message: "user registerd",
    userID: user._id

});
    }catch(err){
        next(err);

    }
});



// login route

router.post("/login", async(req, res, next)=>{
    try{
const {email , password} = req.body;

if(!email || !password){
    return res.status(400).json({
        message: " enter email and password"
    });
}

const user = await User.findOne({email});

if(!user){
    return res.status(404).json({
        message: "user not found"
    });
}

const isPasswordMatch = await bcrypt.compare(password, user.password);

if(!isPasswordMatch){
    return res.status(401).json({
        message: "invalid password"
    });
}

const token = jwt.sign({
    userID: user._id},
    process.env.JWT_SECRET_KEY,
    {expiresIn : "1h"}
);
res.status(200).json({
    message: "login successful",
    token
});

    }catch(err){
        next(err);
    }
})

export default router;