import React, { useState } from 'react';
import '../Style/Navbar.css'; // Import your CSS file
import { FaSearch, FaUser, FaShoppingBag, FaHeart, FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
import UseStateHook from '../component/UseStateHook'
const Navbar = () => {
  const [isTrendingOpen, setIsTrendingOpen] = useState(false);
 const[modal, setModal]=useState(false);
 const HandleLoginForm=()=>{
  setModal(!modal)
 };
  const trendingCategories = [
    "Electronics",
    "Computer Gadget",
    "Fashion",
    "Body Lotion",
    "Sports",
    "Woman Clothes",
    "Shoes",
    "Watches"
  ];

  return (
    <nav className="navbar  " >
      {modal && 
        < UseStateHook HandleLoginForm={HandleLoginForm}/> }
      <div className="navbar-left">
      <Link to='/view'>
      View
      </Link>
        <a href="#" className="logo">Botiga</a>
        <div className="category-dropdown">
          <button className="category-btn">All Categories ▼</button>
          {/* Add your dropdown logic here */}
        </div>
        <div className="search-box">

          <input type="text" placeholder="Search products..." />
          <button className="search-btn">
            {/* Add search icon here */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.125 16.875L13.375 12.125C14.25 10.75 14.75 9.0625 14.75 7.375C14.75 3.3125 11.4375 0 7.375 0C3.3125 0 0 3.3125 0 7.375C0 11.4375 3.3125 14.75 7.375 14.75C9.0625 14.75 10.75 14.25 12.125 13.375L16.875 18.125L18.125 16.875ZM2.75 7.375C2.75 5 5 2.75 7.375 2.75C9.75 2.75 12 5 12 7.375C12 9.75 9.75 12 7.375 12C5 12 2.75 9.75 2.75 7.375Z" fill="black"/>
            </svg>
          </button>

          <div className="icons">
         <div><FaUser className="icon" onClick={HandleLoginForm}/></div>
          <div className="icon-badge">
            <FaShoppingBag className="icon" />
            <span className="badge">0</span>
          </div>
          <div className="icon-badge">
            <FaHeart className="icon" />
            <span className="badge">0</span>
          </div>
        </div>
      
        </div>
      </div>
      <div className="navbar-right">
        <div className="trending-categories"
          onMouseEnter={() => setIsTrendingOpen(true)}
          onMouseLeave={() => setIsTrendingOpen(false)}
        >
          <button className="trending-btn">Trending Categories ▼</button>
          {isTrendingOpen && (
            <div className="trending-modal">
              <ul>
                {trendingCategories.map((category, index) => (
                  <li key={index}><a href="#">{category}</a></li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
        <a href="/">Home</a>
        <a href="/Shop">Shop</a>
        <a href="/vendor">Vendors</a>
        <a href="/Blog">Blog</a>
        <a href="contact">Contact</a>
        </div>
        <span className="phone-number">800-123-4567</span>
      </div>
    </nav>
  );
};

export default Navbar;