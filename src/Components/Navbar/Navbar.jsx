import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
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
  },[])

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li>About us</li>
            <li> <button className='btn'>Contact us</button></li>
        </ul>
      
    </nav>
  )
}

export default Navbar

//1:03:49
