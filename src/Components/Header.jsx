import React from 'react'
import "../stayle/header.css"
import samalyot from "../img/header_airplane_with.svg"
import kravat from "../img/header_bed_with.svg"
import icon from "../img/header_logo_with.svg"
import samalyot_qora from "../img/airplane_black.svg"
import kravat_qora from "../img/bed_black.svg"
import icon_black from "../img/Logo_black.svg"
import { NavLink, useLocation } from 'react-router-dom'
import header from '../img/header.svg'


function Header() {
  let location =useLocation()
console.log(location);

  
  return (
<header className={location.pathname==='/' ? "header":'main_header'}>

    <ul className="header_nav">
        <li>
      <NavLink to="/flight">
       <img src={location.pathname=== '/'? samalyot: samalyot_qora} alt="" />
 
        Find Flight
       </NavLink>
        </li>
        <li>
      <NavLink to="/hotel">
       <img src={location.pathname === '/' ? kravat:kravat_qora} alt="" />
          
       Find Stays
       </NavLink>
        </li>
    </ul>
   <NavLink to="/">
    <img src={location.pathname === '/' ? icon :icon_black} alt="" />
   </NavLink>
   {location.pathname==='/account'?
  <img src={header} alt="" />:
<div className="header_btn">
    <NavLink to="/account">Login</NavLink>
    <NavLink to="/">Sign up</NavLink>
</div>}
</header>
  )
}

export default Header
