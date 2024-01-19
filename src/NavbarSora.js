import React from 'react';
import { Link } from 'react-router-dom';
import './homeSora.css';

function NavbarSora() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-dark" id="navbar-middle">
            {/* Logo */}
            <Link to={'/'}><img src='./assets/logo.jpg' alt='logo'/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i><img src="./assets/icons8-menu-96.png" alt="" /></i></span>
                </button>

            {/* Navbar page link */}
            <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/ProductsRazmanR'}>Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/services_william'}>Services</Link>
                    </li>
                    <li className="nav-item">   
                        <Link to={'/contactAlex'}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavbarSora