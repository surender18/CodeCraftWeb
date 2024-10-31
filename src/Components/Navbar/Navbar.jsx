import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {

  const [sticky, setSticky] =useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>200){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  },[]);
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu ? setMobileMenu(false):setMobileMenu(true);

  }

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li >  Home</li>
            <li>Program</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li>About us</li>
            <li> <button className='btn'>Contact us</button></li>
        </ul>
    <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar

//1:03:49
