import React from "react";
import "../Dashboard/Dashboard_Styles/Sidebar.css"; 
import { FaTachometerAlt, FaFileAlt, FaChartBar, FaPuzzlePiece, FaTable, FaWpforms, FaMap } from "react-icons/fa";
import Image from "../Assets/happy.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="data:image/png;base64,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" alt="Logo" className="logo" />
        <span className="brand-name">BOTIGA</span>
      </div>
      <div className="profile">
        <img src='Image' alt="Happy" className="profile-pic" />
        <div className="profile-info">
          <span className="profile-name">Happy</span>
          <span className="profile-role">ADMIN</span>
        </div>
      </div>
      <ul className="menu">
        <li><FaTachometerAlt /> <a href="Dashboard">Dashboard</a></li>
        <li><FaFileAlt /> Pages</li>
        <li className="submenu">
          <FaChartBar /> Charts</li>
        <li><FaPuzzlePiece />Advanced </li>
        <li><FaPuzzlePiece /><a href="/Invoice">Invoice</a>  </li>
        <li><FaTable /> Table</li>
        <li><FaMap /> Map</li>
      </ul>
    </div>
  );
};

export default Sidebar;
