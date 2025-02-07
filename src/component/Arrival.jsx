import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Arrival.css';
// For react-modal:
import Modal from 'react-modal'

const products = [
  {
    id: 1,
    image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-water-bottle-420x420.jpg.webp',
    name: 'All In One Bottle',
    price: '$22.00 - $55.00',
    description: 'A multi-purpose bottle for all your needs.',
    quality: 'Premium Quality',
    location: 'USA',
    colors: ['#4CAF50', '#2196F3'],
  },
  {
    id: 2,
    image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-alexa-420x420.jpg.webp',
    name: 'Amazon Alexa',
    price: '$49.00 - $69.00',
    description: 'Your personal voice assistant for smart homes.',
    quality: 'High Performance',
    location: 'USA',
    colors: ['white', 'gray'],
  },
  {
    id: 3,
    image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-wireless-headset-420x420.jpg.webp',
    name: 'Headset Gamer Legion',
    price: '$22.00 - $55.00',
    description: 'A powerful gaming headset with surround sound.',
    quality: 'Top-notch Audio',
    location: 'Germany',
    colors: ['black', 'red'],
  },
];

const NewArrivals = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleNavigate = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="new-arrivals">
      <h2>New Arrival Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="overlay">
              <button onClick={() => handleQuickView(product)}>Select Option</button>
              <button onClick={() => handleNavigate(product.id)}>Quick View</button>
              
            </div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="colors">
              {product.colors.map((color, i) => (
                <div key={i} className="color-circle" style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Reusable Modal */}
      <Modal isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)}>
        {selectedProduct && (
          <>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
            <p><strong>Quality:</strong> {selectedProduct.quality}</p>
            <p><strong>Location:</strong> {selectedProduct.location}</p>
            <div className="colors">
              {selectedProduct.colors.map((color, i) => (
                <div key={i} className="color-circle" style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default NewArrivals;
