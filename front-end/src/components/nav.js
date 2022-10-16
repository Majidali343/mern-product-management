import './App.css';
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Nav = () => {
  const navigate=useNavigate();
    const outh=localStorage.getItem('user')
 const logout=()=>{
     localStorage.clear()
     navigate('/signUp');
 }

  return (
    
    <div>
      { outh ? <ul className="ul">
        <li><Link to="/">Products</Link> </li>
        <li> <Link to="/Add">Add Products </Link> </li>
        <li><Link to="/Update">Update Products</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link onClick={logout} to ="/signUp">Logout  ({JSON.parse(outh).name}) </Link></li> 
        </ul>
       
        :
        <ul className="ul leftalign">
          <li><Link to ="/signUp">SignUp</Link></li>
          <li><Link to="/login">login</Link></li>
        </ul>

        
      }
    </div>
  );
};

export default Nav;
