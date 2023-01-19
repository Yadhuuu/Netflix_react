import React from 'react'
import { useState, useEffect } from 'react'
import './Nav.css'
function Nav() {
    const [show,setShow]=useState(false)
    useEffect(() => {
     window.addEventListener("scroll",()=>{
        if (window.scrollY>100) {
            setShow(true)
        } else setShow(false)
     })
     return ()=>{
        window.removeEventListener("scroll",()=>{})
     }
    }, [])
    
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='logo'
        src="https://commons.wikimedia.org/wiki/File:Netflix_2015_logo.svg"
        alt='logo'/>

    </div>
  )
}

export default Nav