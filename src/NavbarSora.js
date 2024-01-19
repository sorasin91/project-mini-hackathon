import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function NavbarSora() {
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark" id="navbar-middle">
            {/* Logo */}
            <img src='./assets/logo.jpg' alt='logo'/>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu">
                    <span><i><img src="./img/icons8-menu-96.png" alt="" /></i></span>
                </button>

            {/* Navbar page link */}
            <div class="collapse navbar-collapse" id="navbar-menu">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/ProductsRazmanR'}>Product</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/services_william'}>Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/contactAlex'}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavbarSora