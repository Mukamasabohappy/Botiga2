import React from 'react';
import '../Style/Login.css'; // Import your CSS file

const LoginRegister = () => {
  return (
    <div className="login-register-container">
      <div className="login-panel">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username or email address *</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="login-button">LOG IN</button>
          <a href="#" className="forgot-password">Lost your password?</a>
        </form>
      </div>

      <div className="register-panel">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address *</label>
            <input type="email" id="email" name="email" required />
            <p className="password-link">A link to set a new password will be sent to your email address.</p>
          </div>
          <div className="form-group">
            <label>
              <input type="radio" id="customer" name="userType" value="customer" defaultChecked />
              I am a customer
            </label>
            <label>
              <input type="radio" id="vendor" name="userType" value="vendor" />
              I am a vendor
            </label>
          </div>
          <button type="submit" className="register-button">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;