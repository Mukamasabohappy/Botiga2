import React, { useState } from 'react';
import '../Style/Shop.css';
import pro1 from "../assets/pic1.jpg";
import pro2 from "../assets/pic2.jpg";
import pro3 from "../assets/pic3.jpg";
 import ProductModal from './Productmodal'; // Import the modal component

const ShopComponent = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'All in One Bottle', price: '22.00 - 555.00', image: pro1, rating: 4, description: 'This is a versatile bottle for all your needs. Perfect for hiking, gym, or everyday use. Keeps drinks cold for 24 hours and hot for 12.' },
    { id: 2, name: 'Amazon Alexa', price: '49.00 - 569.00', image: pro2, rating: 5, description: 'Smart home assistant powered by voice. Control your smart devices, play music, and get information hands-free.  Connects to Wi-Fi and Bluetooth.' },
    { id: 3, name: 'All in One Bottle', price: '22.00 - 555.00', image: pro3, rating: 4, description: 'Another bottle option for your daily hydration.  Made from BPA-free plastic, leak-proof design, and dishwasher safe. Available in multiple colors.' },
    { id: 4, name: 'Amazon Alexa', price: '49.00 - 569.00', image:"https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-headset-2-420x420.jpg.webp", rating: 5, description: 'Headset with Alexa integration.  Noise-cancelling microphone, comfortable earcups, and adjustable headband.  Long battery life for extended use.' },
    { id: 5, name: 'All in One Bottle', price: '22.00 - 555.00', image:'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-watch-2-420x420.jpg.webp', rating: 4, description: 'Stylish smartwatch for fitness tracking. Tracks heart rate, steps, and sleep.  Water-resistant and compatible with iOS and Android.' },
    { id: 6, name: 'Amazon Alexa', price: '49.00 - 569.00', image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-cam-recorder-420x420.jpg.webp', rating: 5, description: 'High-quality camera recorder. Records in 4K resolution, has image stabilization, and comes with a built-in microphone. Ideal for vloggers and content creators.' },
    { id: 7, name: 'John Sport Shoes', price: '22.00 - 555.00', image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-shoes-2-420x420.jpg.webp', rating: 5, description: 'Comfortable sports shoes for running. Lightweight design, breathable mesh upper, and cushioned sole. Provides excellent support and shock absorption.' },
    { id: 8, name: 'Mouse Raxer3000DPI', price: '49.00 - 569.00', image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-mouse-420x420.jpg.webp', rating: 4, description: 'High-precision gaming mouse. 3000 DPI sensor, customizable buttons, and ergonomic design. Enhances your gaming experience with accurate tracking and comfortable grip.' },
    { id: 9, name: 'Santa Monica Facial Cream', price: '22.00 - 555.00', image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-skin-cream-2-420x420.jpg.webp', rating: 5, description: 'Luxurious facial cream for skin rejuvenation. Contains natural ingredients, reduces wrinkles, and hydrates the skin. Leaves your skin feeling soft, smooth, and radiant.' },
  ]);

  const [categories, setCategories] = useState([
    'Body Lotion (1)', 'Computer Gadget (3)', 'Electronics (3)', 'Fashion (3)', 'General (1)', 'Shoes (2)', 'Sports (3)', 'Watch (1)', 'Woman Clothes (3)'
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [maxPrice, setMaxPrice] = useState(79);
  const [selectedColor, setSelectedColor] = useState(null);
  const colorOptions = ['red', 'blue', 'green', 'black', 'white', 'gray', 'yellow', 'purple'];
  const [selectedRating, setSelectedRating] = useState(null);

    const [hoveredProductId, setHoveredProductId] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Implement filtering logic here
  };

  const handlePriceChange = (event) => {
    setMaxPrice(event.target.value);
    // Implement filtering logic here
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    // Implement filtering logic here if needed
};
    const handleMouseEnter = (productId) => {
        setHoveredProductId(productId);
    };

    const handleMouseLeave = () => {
        setHoveredProductId(null);
    };

    const handleQuickViewClick = (product) => {
        setSelectedProduct(product);
         // Prevent scrolling when the modal is open
         document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
         // Re-enable scrolling when the modal is closed
         document.body.style.overflow = 'unset';
    };



  return (
    <div >

        <div className="pic-one">
  <img
    src="https://demo.athemes.com/botiga-multi-vendor/wp-content/uploads/sites/143/2022/12/shop-page-header-bg-1536x346.jpg"
    alt="Shop-img"
    className="shop-image" // Add a class for styling the image if needed
  />
  <h2 className="shop-title">SHOP</h2>
</div>
    <div className="shop-container">
      <aside className="sidebar1">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category} onClick={() => handleCategoryClick(category)}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>

        <div className="filter-section">
          <h3>Color</h3>
          <div className="color-filter">
            {colorOptions.map(color => (
              <div
                key={color}
                className={`color-option ${selectedColor === color ? 'selected' : ''} ${color}`}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        </div>

        <div className="filter-section">
                <h3>Rating</h3>
                <div className="rating-filter">
                    {[5, 4, 3, 2, 1].map(rating => (
                        <div key={rating} className="star-rating" onClick={() => handleRatingClick(rating)}>
                            {[...Array(5)].map((_, i) => ( // Always render 5 stars
                                <span key={i} className={`star ${i < rating ? 'active' : ''}`}></span>
                            ))}
                            <span className="star-count">({products.filter(p => p.rating === rating).length})</span>
                        </div>
                    ))}
                </div>
            </div>

        <div className="filter-section">
          <h3>Price</h3>
          <input
            type="range"
            min={0}
            max={79}
            value={maxPrice}
            onChange={handlePriceChange}
          />
          <div className="price-range-values">
            <span>$0</span>
            <span>${maxPrice}</span>
          </div>
        </div>
      </aside>

      <main className="product-grid">
        <div className="product-header">
          <p>Showing 1-9 of 13 results</p>
          <select>
            <option>Default sorting</option>
          </select>
          <div className="grid-view-options">
          </div>
        </div>

        <div className="products">
          {products.map((product) => (
            <div
                className="product"
                key={product.id}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div className="star-rating">
                {[...Array(product.rating)].map((_, i) => (
                    <span key={i} className="star active"></span>
                ))}
              </div>
                 {hoveredProductId === product.id && (
                        <button className="quick-view-button" onClick={() => handleQuickViewClick(product)}>
                            Quick View
                        </button>
                    )}
            </div>
          ))}
        </div>
      </main>
    </div>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={handleCloseModal} />
        )}
    </div>
  );
};

export default ShopComponent;