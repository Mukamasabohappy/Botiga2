import React from 'react';
import '../Style/Store.css'; // Import your CSS file
const VendorList = () => {
    const vendors = [
        {
            id: 1,
            name: "John Doe's Store",
            address: ["Central Park, New York", "New York, United States (US)"],
            image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-6.jpg.webp',
            rating: 4, // Example rating (out of 5)
            icon:'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-glass-shop-1-1.jpg.webp',
        },
        {
            id: 2,
            name: "Jessica's Store",
            address: ["Central Park, New York", "New York, United States (US)"],
            image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-shoes-shop-1-2.jpg.webp',
            rating: 5,
        },
        {
            id: 3,
            name: "Santa Monica's Store",
            address: ["Central Park, New York", "New York, United States (US)"],
            image:'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-1-1.jpg.webp',
            rating: 3,
        },
        {
            id: 4,
            name: "Digital Good's Store",
            address: ["Central Park, New York", "New York, United States (US)"],
            image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-4-2.jpg.webp',
            rating: 4,
        },
        {
            id: 5,
            name: "The Glass Store",
            address: ["Central Park, New York", "New York, United States (US)"],
            image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-banner-5-1.jpg.webp',
            rating: 4,
        },
        {
            id: 6,
            name: "Josh Doe's Store",
            address: ["Central Park, New York", "New York, United States (US)"],
            image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/uploads/sites/145/2022/12/vendor-banner-3.jpg',
            rating: 4,
        },
    ];

    const renderStarRating = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={`star ${i < rating ? 'active' : ''}`}></span>
            );
        }
        return stars;
    };

    return (
        
        <div className="vendor-list-container">
            <div><h1>Store List</h1></div>
            <div className="header">

                <div className="header-controls">
                    <p>Total stores showing: {vendors.length}</p>
                    <div className="filter-sort">
                        <button className="filter-button">Filter</button>
                        <div className="sort-by">
                            <span>Sort by:</span>
                            <select>
                                <option>Most Recent</option>
                                {/* Add more sorting options as needed */}
                            </select>
                        </div>
                    </div>
                    <div className="layout-options">
                        <button className="list-view">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9H17V7H3V9ZM3 15H17V13H3V15ZM3 21H17V19H3V21ZM21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5ZM19 5H5V19H19V5Z" fill="#000" />
                            </svg>
                        </button>
                        <button className="grid-view active">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 11H9V5H3V11ZM11 19H17V13H11V19ZM19 11H21V5H19V11ZM11 11H17V5H11V11ZM3 19H9V13H3V19ZM3 19H9V13H3V19ZM11 19H17V13H11V19Z" fill="#000" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="vendor-grid">
                {vendors.map(vendor => (
                    <div className="vendor-card" key={vendor.id}>
                        <div className="vendor-image">
                            <img src={vendor.image} alt={vendor.name} />
                        </div>
                        <div className="vendor-details">
                            <h3 className="vendor-name">{vendor.name}</h3>
                            <div className="vendor-rating">
                                {renderStarRating(vendor.rating)}
                            </div>
                            <div className="vendor-address">
                                {vendor.address.map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                            <button className="view-store-button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#000" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VendorList;