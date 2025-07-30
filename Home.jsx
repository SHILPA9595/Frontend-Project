import React from "react";
// import "./Home.css";

// import AboutUs from './about.jsx';
import ContactUs from './ContactUs.jsx';
// import Services from './services.jsx';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul id="mainpage">
            <Link to="/" id="homepage">HOME</Link>
            {/* <Link to="/about_us" id="aboutpage">ABOUT US</Link> */}
            <Link to="/contact_us" id="contactpage">CONTACT US</Link>
            {/* <Link to="/services" id="servicespage">SERVICES</Link> */}
          </ul>
        </nav>
      </div>
      <Routes>
        {/* <Route path="/about_us" element={<AboutUs />} /> */}
        <Route path="/contact_us" element={<ContactUs />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
