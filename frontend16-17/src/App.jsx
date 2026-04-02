// import React, { useState } from "react";
// import axios from "axios";



// const API_BASE = "http://localhost:8000";
// const App = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${API_BASE}/api/auth/register`, 
//         {
//           email: email,
//           password: password,
//         },
//       );
//       setMessage(response.data.message);
//     } catch (error) {
//       if (error.response) {
//         setMessage(error.response.data.message);
//       } else {
//         setMessage("server not reacheable");
//       }
//     }
//   };


//   const registerUser = async()=>{
//     try{

//         const res = await axios.post(`${API_BASE}/api/auth/register`,{
//             email: email,
//             password: password
//         });
//         setMessage(res.data.message);

//     }catch(error){
//         if(error.response){
//             setMessage(error.response.data.message);
//         }else{
//             setMessage("server not reacheable");
//         }

//     }
//   }

//   return (
//     <div>
//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes> */}

//       <div>
//         <h2>Register</h2>
//         <form action="" onClick={handleRegister}>
//           <input
//             type="email"
//             placeholder="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button type="submit" >Register</button>

//           <p>{message}</p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;













import React, { useState } from 'react'
import axios from 'axios';
const App = () => {

  const API_BASE = "http://localhost:8000";



  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()

  
  const registerUser = async(e)=>{
    e.preventDefault();
    try{
      const responce = await axios.post(`${API_BASE}/api/auth/register`,{
        email , password
      });
      setMessage(responce.data.message);
    }catch(err){
if(error.responce){
  setMessage(error.responce.data.message);
}else{
  setMessage("server not reachable");
}
}; 
}

const loginUser = async(e)=>{
  e.preventDefault();
  try{
    const responce = await axios.post(`${API_BASE}/api/auth/login`,{
      email, password
    })
    localStorage.setItem("token", responce.data.token);
    setMessage("login successful")
  }catch{
    if(error){
      setMessage(error.data.message);
    }else{
      setMessage("server is not reachable");
    }
  }
}

  return (
    <div className=''>
    <div>
      <h1>auth system</h1>
    </div>
    <div>
      <input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
      <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      <button onClick={registerUser}>Register</button>
      <button onClick={loginUser}>Login</button>
      <p>{message}</p>
    </div>
      
    </div>
  )
}

export default App
