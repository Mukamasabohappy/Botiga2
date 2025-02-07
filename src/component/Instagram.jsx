import React from "react";
import "../Style/Instagram.css"; // Ensure you create this CSS file

const images = [
  "https://your-image-url1.com",
  "https://your-image-url2.com",
  "https://your-image-url3.com",
  "https://your-image-url4.com",
  "https://your-image-url5.com",
  "https://your-image-url6.com",
];

const InstagramGallery = () => {
  return (
    <div className="instagram-gallery">
      <h2>Follow us on @instagram</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Instagram ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
