import React from 'react'
import { useState } from 'react';

const Addproduct=()=>{
     
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [orderDate,setOrderDate]=useState("");
    const [deliverDate,setDeliverDate]=useState("");
    const [size,setSize]=useState("");
    const [stock,setStock]=useState("");
    const [error,setError]=useState("");


    const CollectData=async ()=>{

        if(!name||!price||!orderDate||!deliverDate||!size||!stock||!error)
         {
            setError(true)
            return false;
         }
        console.log(name,price,orderDate,deliverDate,size,stock);
       
        let result=await fetch("http://localhost:5000/addproduct", {
            method:"post",
            body: JSON.stringify({name,price,orderDate,deliverDate,size,stock}),
            headers:{
              'content-Type':'application/json',
              authorization: ` bearar${ JSON.parse(localStorage.getItem("token"))}`,
            }
           });
               result=await result.json()
               console.warn(result)
       
    }

     return(
        <>
            <h2>Add a product here</h2>
            <form>
                <input  className='inputBox' type="text" 
                 value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter the name '/>
                {error && !name && <span  className='invalid'>Enter a valid name</span> } 

                <input  className='inputBox' type="text" 
                value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter the price '/> 
                {error && !price && <span  className='invalid'>Enter a valid name</span> } 

                <input  className='inputBox' type="text" 
                value={orderDate} onChange={(e)=>setOrderDate(e.target.value)} placeholder='Enter the orderdate '/>
                {error && !orderDate && <span  className='invalid'>Enter a valid name</span> } 

                <input  className='inputBox' type="text" 
                value={deliverDate} onChange={(e)=>setDeliverDate(e.target.value)} placeholder='Enter the Deliverdate '/>
                {error && !deliverDate && <span  className='invalid'>Enter a valid name</span> } 

                <input  className='inputBox' type="text" 
                value={size} onChange={(e)=>setSize(e.target.value)} placeholder='Enter the size '/> 
                {error && !size && <span  className='invalid'>Enter a valid name</span> } 
                <input  className='inputBox' type="text"
                value={stock} onChange={(e)=>setStock(e.target.value)} placeholder='Enter the stock '/> 
                {error && !stock && <span  className='invalid'>Enter a valid name</span> } 

                <button onClick={CollectData} className='button' type='button'>Submit</button>
    
            </form>
        </>
     );

}

 export default Addproduct;


