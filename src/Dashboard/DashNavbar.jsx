import React from "react";
import "../Dashboard/Dashboard_Styles/DashNavbar.css"; // Adjust the path as needed
import { FaUser, FaSearchengin } from "react-icons/fa6";

const DashNavbar = () => {
  return (
    <div className="dash-navbar">
      <span className="dash-navbar-title">Dashboard</span>
      <div className="dash-navbar-links">
        <a href="/profile" className="dash-navbar-link">
          <FaUser className="dash-navbar-icon" /> Profile
        </a>
        <a href="/search" className="dash-navbar-link">
          <FaSearchengin className="dash-navbar-icon" /> Search
        </a>
      </div>
    </div>
  );
};

export default DashNavbar;