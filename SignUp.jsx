// SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div style={{ paddingBottom: '90px' }}>
      <h2 style={{padding:'5px', marginBottom:'20px'}}>Sign Up</h2>
      <form>
        <div>
        <input type="text" placeholder="Name" required  style={{height:'5vh' ,marginLeft:'280px'}} /><br /><br />
        <input type="email" placeholder="Email" required style={{height:'5vh',marginRight:'-280px', marginleft:'-550px'}} /><br /><br />
        <input type="password" placeholder="Password" required style={{height:'5vh', marginRight:'-280px'}} /><br /><br />
        <button type="submit" style={{ marginRight:'-270px', marginBottom:'5px'}}>Create Account</button>
      <p>
       <h3  style={{ marginLeft:'270px'}} > Already have an account?</h3> <Link to="/signin" style={{ marginLeft:'270px'}}>Sign In</Link>
      </p>
       </div>
       </form>
    </div>
  );
}

export default SignUp;
