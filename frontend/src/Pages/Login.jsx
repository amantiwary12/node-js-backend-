// import React from "react";

// const Login = () => {

//   const handleLogin = async () => {
//     const res = await fetch("http://localhost:3000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: "aman",
//         password: "1234",
//       }),
//     });

//     const data = await res.text();
//     console.log(data);
//   };


//   // map function 
//   // const fruits = [ "apple", "mango", "orange"];




//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//     </div>


// // map function 
//     // <div>
//     // <ul>
//     //   {fruits.map(fruits=> <li key={fruits}> {fruits}</li>)}
//     // </ul>

//     // </div>
//   );
// };

// export default Login;





//13 leason  React ↔ Backend Hello World Integration
// using fetch 
// import { useEffect, useState } from "react";

// function App() {
//   const [message, setMessage] = useState("Loading...");

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("http://localhost:8000/");
//       const data = await res.json();
//       setMessage(data.message);
//     }

//     fetchData();
//   }, []);

//   return <h1>{message}</h1>;
// }

// export default App;



// using axious 
// import React, { useEffect, useState } from 'react';
// import axios from "axios";

// const Login = () => {

//   const [meaasge, setMeaasge] = useState("loading.....");
//   const [error, setError] = useState("")


//   useEffect(()=>{
//     async function fetchdata(){
//       try{
//         const res = await axios.get("http://localhost:8000/")
//         setMeaasge(res.data.message);
//       }catch(err){
//         setError("failed to connect ")
//         console.log(err.meaasge)
//       }
//     }
//     fetchdata();
//   },[]);
//     if (error) return <div>{error}</div>;


//   return (
//     <div>
//       {meaasge}
//     </div>
//   )
// }

// export default Login







/////////////////////////////////////////////// LESSON 15  login 
// import { useState } from "react";

// const Login = () => {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(" ");


//     const handlelogin = async (e) =>{
//         e.preventDefault();
//         setError(" ");
//         if(!email || !password){
//             setError("please provide email and password");
//             return;
//         }
//         try{
//             const res = await fetch("http://localhost:8000/login",{
//                 method: "POST",
//                 headers:{
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({email, password}),
//             });
//             const data = await res.json();

//              if (!res.ok) {
//         setError(data.message || "Login failed");
//         return;
//       }

//       console.log(data);
//       alert("Login success");

//     } catch (err) {
//       setError("Server not responding");
//     }
//   };


//   return (
//     <form onSubmit={handlelogin}>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
        
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
        
//       />

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;





/////////////////////////////////////////////// LESSON 16  