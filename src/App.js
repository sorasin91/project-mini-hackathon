import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSora from "./HomeSora";
import NavbarSora from "./NavbarSora";
import Contact from "./contactAlex";
import Footer from "./footerAlex";
import Products from "./ProductsRazmanR";

function App() {
  return (
    <div>
      <Router>
        <NavbarSora />
        <Routes>
          <Route path='/' element ={<HomeSora />}/>
          <Route path='/ProductsRazmanR' element ={<Products/>}/>
          <Route path='/contactAlex' element ={<Contact/>}/>
  
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
