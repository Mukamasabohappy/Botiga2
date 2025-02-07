import React, { useState } from 'react';
import '../Style/Signup.css'; // Import your CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'customer', // Default user type
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call)
    console.log(formData); // Placeholder: log form data to console
  };

  return (
    <div className="signup-container">
      <div className="signup-panel">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="radio"
                id="customer"
                name="userType"
                value="customer"
                checked={formData.userType === 'customer'}
                onChange={handleChange}
              />
              I am a customer
            </label>
            <label>
              <input
                type="radio"
                id="vendor"
                name="userType"
                value="vendor"
                checked={formData.userType === 'vendor'}
                onChange={handleChange}
              />
              I am a vendor
            </label>
          </div>
          <button type="submit" className="signup-button">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;