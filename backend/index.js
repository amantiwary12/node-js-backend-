// const express = require("express");

// const app = express();

// app.get("/", (req, res)=>{
//     res.send("backend is connected lovely ");
// })

// app.listen(3000, ()=>{
//     console.log("server is connected");
// })

//////////////////////////////////////////////////////////////////

// const express = require("express");

// const app = express();

// app.use(express.json());

// app.get("/health", (req, res)=>{
//     res.send("ok")
// })

// app.post("/test", (req, res)=>{
//     res.send ("Test successful");
// })

// //
// app.get("/user",(req,res)=>{
//     const role = req.query.role;
//     res.send(`your role is ${role}`);
// })

// app.post("/login", (req,res)=>{
//     const {username, password}= req.body;
//     res.send("login info ");
// })
// //

// app.listen(3000,()=>{
//     console.log("server is connected ");
// })

//////////////////////////////////////////////////////////////////

// const express = require("express");

//     const app = express();

//     app.use(express.json);

//     app.get("/user/:id", (req, res)=>{
//         console.log(req.params.id);
//         res.send(`user id is  ${req.params.id}`);

//     })

//     app.listen(3000, ()=>{
//         console.log("server is connected ")
//     })

//////////////////////////////////////////////////////////////////

// const express = require("express");

// const app = express();

// app.use(express.json());

// app.use((req, res, next) => {
//   console.log("request  is ", req.method, req.url);
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello from backend");
// });

// app.listen(3000, () => {
//   console.log("server is connected");
// });

//////////////////////////////////////////////////////////////////

// const express = require("express");

//     const app = express();
//     app.use(express.json());

//     app.post("/login",(req,res)=>{
//         const {username , password}= req.body;

//         if(!username || !password){

//             return res.status(404).send({message: " missing u and p"});
//         }
//         res.status(200).send({username , password :" this is you "})
//     })

//     app.listen(3000, ()=>{
//         console.log("server start at http://localhost:3000")
//     })

////////////////////////////////////////////////////////////////// 10 leason error handeling error and next()

// const express = require("express");

// const app = express();
// app.use(express.json());

// app.get("/test", (req,res,next)=>{
//     const fail = true;

//     if(fail){
//         return next(new Error("something went wrong "));
//     }
//     res.send("it good ");
// });

// app.use((err, req,res, next)=>{
//     console.error(err.message);
//     res.status(500).send({error: err.message})
// });

// app.listen(3000, ()=>{
// console.llog ("server is connected at http://localhost:3000")
// })

////////////////////////////////////////////////////////////////// leason 11 async and await

// What does “async” mean (simple)
// Async means: “this function may take time, don’t block the server.”
// What does await mean (very important)
// await means: “wait for this async work to finish, then continue.”
// Why try / catch is REQUIRED
// Async errors do NOT crash immediately, but they skip code silently.

// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/test", async (req, res, next) => {
//   try {
//     const user = await getuserfromDb();
//     res.send(user);
//   } catch (err) {
//     next(err);
//   }
// });
// app.use((err, req, res, next) => {
//   console.error(err.message);
//   res.send({ error: err.message });
// });

// app.listen(3000, () => {
//   console.log("server is connected at http://localhost:3000");
// });




////////////////////////////////////////////////////////////////// leason 12 Frontend ↔ Backend Integration (Finally connecting both)
// fetch("http://localhost:3000/health")
//  .then(res => res.text());
//  .then(data => console.log(data));



// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());


// app.post("/login", (req,res)=>{
//   const{username , password}= req.body;

//   if(!username || !password){
//    return res.status(400).send({message: " missing username and password"});
//   }
//   res.send("login sucessful")

// })


// app.listen(3000, () => {
//   console.log("server is connected at http://localhost:3000");
// });






////////////////////////////////////////////////////////////////// leason 13 React ↔ Backend Hello World Integration 

// import express from "express";
// import cors from "cors"


// const app = express();

// app.use(cors())
// app.use(express.json());


// app.get("/", (req,res)=>{
//   res.json({message: "hello"})
// })



// app.listen(8000, ()=>{
//   console.log("server start")
// })





/////////////////////////////////////////////// LESSON 15 MongoDB + Mongoose — first real database (step by step, no rush) 
// You can use MongoDB directly, but its low-level and unsafe.So we use Mongoose.Mongoose = MongoDB driver + schema + validation


// import express from "express";
// import cors from "cors";
// import ConnectedDB from "./config/db.js";


// const app = express();

// app.use(cors());
// app.use(express.json());

// ConnectedDB();


// // login 
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "Missing fields" });
//   }

//   res.json({ message: "Login route working" });
//   console.log(req.body);
// });



// // app.get("/", (req,res)=>{
// //     res.status(200).send("backend is connected");
// // });


// app.listen(8000, ()=>{
//     console.log("server is running at http://localhost:8000");
// })





/////////////////////////////////////////////// LESSON 16 

