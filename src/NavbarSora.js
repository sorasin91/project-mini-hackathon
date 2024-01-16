import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function NavbarSora() {
  return (
    <div>
        <div className='container' id="navbar" >
       <ul>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/ProductsRazmanR'}>Product</Link>
        </li>
        <li>
            <Link to={'/service'}>Services</Link>
        </li>
        <li>
            <Link to={'/contactAlex'}>Contact Us</Link>
        </li>
       </ul>
       </div>
    </div>
  )
}

export default NavbarSora