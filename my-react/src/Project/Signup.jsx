import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <input type="text" name="firstName" placeholder="First Name"  />
        </div>
        <div className="form-group">
          <input type="text" name="lastName" placeholder="Last Name"  />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email Address"  />
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Password"  />
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup