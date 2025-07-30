import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Background from './background.jsx';

function Navbar() {
  return (
    <nav style={{ paddingBottom: '10px'}}>
       <img src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png" style={{ height: '50px', width: '80px',paddingTop: '10px',paddingRight: '1400px'}} />
      <Link to="/" style={{ marginRight: '20px', }}>Home</Link>
      <Link to="/signin" style={{ marginRight: '20px' }}>Sign In</Link>
      <Link to="/signup">Sign Up</Link>
       <button id="butt"  style={{ borderRadius: '12px',height: '40px', fontSize: '20px', right: '40px', position: 'absolute', width: '130px',marginTop:'-20px'}}>Order Online</button>
    </nav>
  );
}

function Sgn() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default Sgn;
