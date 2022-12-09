import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  

  
  
  return (
 <>


 <header style={{backgroundColor:'#aaf8' }}>
    

    <nav style={{display:'flex', textDecoration:'none'}}>
    <NavLink to="/" style={{margin:'20px'}} end  activeStyle={{color:'yellow'}}>Home</NavLink>
    <NavLink to="cont" style={{margin:'20px'}} activeStyle={{color:'yellow'}}>Contact us</NavLink>
    <NavLink to="login" style={{margin:'20px'}} activeStyle={{color:'yellow'}}>Login</NavLink>


    

    </nav>
 </header>
 
 </>
  )
}

export default Header
