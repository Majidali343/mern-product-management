import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";


const Login = () => {
   const [email,setEmail]=useState("")
   const [password,setPasword]=useState("")
   const navigate=useNavigate();

   
   useEffect(()=>{
    const outh=localStorage.getItem('user')
    if(outh){
     navigate('/');
    }
   },[])

   

   const onclick=async ()=>{
        console.log(email,password)
        let result=await fetch("http://localhost:5000/login" ,{
          method:"post",
          body:JSON.stringify({email,password}),
          headers:
          {
            'content-Type':'application/json'
          }
        });

        result=await result.json();
        console.log(result);
        if(result.auth){
          localStorage.setItem("user",JSON.stringify(result.data))
          localStorage.setItem("token",JSON.stringify(result.auth))
          
          navigate('/');
        }
        else{
          alert("wrong username and password")
        }
   } 
   
  return <div>
    <h1>Please Login Here</h1>
   <form>
   <input className='inputBox' type="text" 
   value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email "/>
   <input className='inputBox' type="text" 
   value={password} onChange={(e)=>setPasword(e.target.value)} placeholder="Enter Password "/>
   <button  onClick={onclick} className='button' type='button'>Submit</button>
   </form>
  </div>;
};

export default Login;
