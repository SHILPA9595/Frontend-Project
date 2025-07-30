import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div style={{ padding: '20px',marginleft:'-850px'}}>
      <h2 style={{padding:'5px', marginBottom:'35px'}}>Sign In</h2>
      <form>
        <div>
        <input type="email" placeholder="Email" required  style={{height:'5vh' ,marginLeft:'280px'}}/><br /><br />
        <input type="password" placeholder="Password" required style={{height:'5vh',marginRight:'-280px', marginleft:'-550px'}} /><br /><br />
        <button type="submit" style={{height:'5vh', marginRight:'-270px'}} >Sign In</button>
        </div>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
export default SignIn;

