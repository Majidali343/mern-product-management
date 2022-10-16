import React from 'react'

import {Navigate,Outlet} from 'react-router-dom'

const privatecomponents=()=>{
    
    const outh=localStorage.getItem('user');
     return outh ? <Outlet/> :<Navigate to="signup"/>
}

export default privatecomponents;