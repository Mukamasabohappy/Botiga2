import React from 'react';
import '../Style/Vendor.css';

const vendors = [
  {
    image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-5.jpg.webp', // Replace with your image path
    name: 'Santa Monica\'s Store',
    location: 'New York, NY',
  },
  {
    image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-4-2.jpg.webp', // Replace with your image path
    name: 'Josh Doe\'s Store',
    location: 'New York, NY',
  },
  {
    image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-6.jpg.webp', // Replace with your image path
    name: 'Digital Good\'s Store',
    location: 'New York, NY',
  },
];

const VendorList = () => {
  return (
    <div className="vendor-list-container">
      <div className="shop-now">
        <button>SHOP NOW</button>
      </div>
      <h2>Our Vendor List</h2>
      <div className="vendor-list">
        {vendors.map((vendor, index) => (
          <div className="vendor-item" key={index}>
            <img src={vendor.image} alt={vendor.name} />
            <div className="vendor-details">
              <h3>{vendor.name}</h3>
              <p>{vendor.location}</p>
            </div>
            <button className="view-store-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 19L15 12L10 5V19Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorList;