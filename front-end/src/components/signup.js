import React from 'react'
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router';


const  SignUp= ()=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPasword]=useState("");
    const navigate=useNavigate();
    
    useEffect(()=>{
     const outh=localStorage.getItem('user')
     if(outh){
      navigate('/');
     }
    })
    
    const collectdata=async ()=>{
    console.log(name,email,password)
     let result=await fetch("http://localhost:5000/registration", {
      method:"post",
      body: JSON.stringify({name,email,password}),
      headers:{
        'content-Type':'application/json'
      },
     });
         result=await result.json()
         console.warn(result)
         localStorage.setItem("user",JSON.stringify(result.data))
         localStorage.setItem("token",JSON.stringify(result.auth))

         navigate('/');
       
    }

    return(
     <div>
    <h1> Register Here </h1>
    <form>
     <input className='inputBox' type="text" value={name}
     onChange={(e)=>setName(e.target.value)} placeholder="Enter username"/>

     <input className='inputBox' type="text"  
     value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />

     <input className='inputBox' type="password"  
     value={password} onChange={(e)=>setPasword(e.target.value)} placeholder="Enter password"/>

     <button onClick={collectdata} className='button' type='button'>Submit</button>

    </form>
     </div>
    
    );

}

export default SignUp;