import React from 'react'
import { useState,useEffect} from 'react';
import '../css/navbar.css'
import {Link} from "react-router-dom";
import '../fontawesome/css/all.css';



function Navbar() {

const [width, setwidth] = useState(window.innerWidth);

function handlewidthchange() {
    setwidth(window.innerWidth);
    window.location.reload();
}
useEffect(()=>{
    window.addEventListener('resize',handlewidthchange);
    return ()=>{
      window.removeEventListener('resize',handlewidthchange);
      
    }
  },[]);

let smallscreen = width<=650;

function handleclick() {
 document.querySelector(".iconbtn>i").classList.toggle("fa-xmark");

let list = document.getElementById("list-items");
list.style.display = list.style.display !== 'grid' ? 'grid' : 'none';
}
let nochange=()=>{};
  return (
   <>
   <nav className="navbar">
    <span className="logo">Navbar</span>
    
    <ul id='list-items' className={smallscreen?'smalldevices':'nav-links'} onClick={smallscreen?handleclick:nochange}>
    <li><Link className="link" to="/" >Home</Link></li>
    <li><Link className="link" to="/About">About</Link></li>
    <li><Link className="link" to="/Services">Services</Link></li>
    <li><Link className="link" to="/Contect">Contect</Link></li>
    </ul>
    <span className='iconbtn' style={smallscreen ? { display:'block'} : {display : 'none'} }>
         <i className="fa-solid fa-bars" onClick={handleclick} ></i></span>
   </nav>
   </>
  )
}

export default Navbar