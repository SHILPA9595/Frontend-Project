import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ContactUs from './ContactUs'
// import Navbar from './Navbar'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
    {/* <Navbar/> */}
    <BrowserRouter>
      {/* <div>
        <nav>
          <ul id="mainpage">
            <Link to="/" id="homepage">HOME</Link>
            <Link to="/about_us" id="aboutpage">ABOUT US</Link>
            <NavLink to="/contact_us" id="contactpage">CONTACT US</NavLink>
            <Link to="/services" id="servicespage">SERVICES</Link>
          </ul>
        </nav>
      </div> */}
      <Routes>
        {/* <Route path="/about_us" element={<AboutUs />} /> */}
        <Route path="/contact_us" element={<ContactUs />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </BrowserRouter>
  
    </>
  );
}








