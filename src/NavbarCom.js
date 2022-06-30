import React, { useState } from 'react'
import './NavbarCss.css';

const NavbarCom = () => {

  return (
    <nav className='navbar_items'>
    <div className='navbar_brand'>
  <a href='/' ></a>
  </div>
    <div className='navbar_links'>
        <li><a href='#section1'>O projekcie</a></li>
        <li><a href='#section2'>O nas</a></li>
        <li><a href='#section3'>Harmonogram</a></li>
        <li><a href='#section4'>Kontakt</a></li>
      </div>

</nav>

  )
}

export default NavbarCom