import React from 'react';
import '../Style/ProductModal.css';

const ProductModal = ({ product, onClose }) => {

    return (
        <div className="modal popup-modal product-popup-modal">
            <div className="modal-content product-modal-content">
                <span className="close" onClick={onClose}>×</span>

                <div className="product-details-container">

                    <div className="product-image-section">
                        <div className="main-image">
                            <img src={product.image} alt={product.name} />
                            <span className="zoom-icon">🔍</span>
                        </div>

                        <div className="thumbnail-images">
                            {/* Replace with actual thumbnail URLs if you have them */}
                            <img src={product.image} alt="Thumbnail 1" />
                            <img src={product.image} alt="Thumbnail 2" />
                            <img src={product.image} alt="Thumbnail 3" />
                        </div>
                    </div>

                    <div className="product-info-section">
                        <div className="product-specs">
                            <p>SKU: N/A</p>
                            <p>CATEGORIES: General, Sports</p>
                            <p>♥ View Wishlist</p> {/* Using Unicode Heart */}
                        </div>

                        <div className="vendor-info">
                            <h3>Vendor</h3>
                            <div className="vendor-details">
                                {/* Replace with actual vendor info */}
                                <img src={product.image} alt="Vendor Jessica Doe" />
                                <p>Jessica Doe</p>
                            </div>
                            <p>📍 Address</p> {/* Using Unicode Map Marker */}
                            <p>Central Park, New York, US</p>
                            <p>📞 Contact</p> {/* Using Unicode Phone */}

                            <button className="see-all-products-button">See All Products</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductModal;