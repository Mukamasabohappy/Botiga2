 import React, { useState } from 'react';
import '../Style/Shop.css'; // Import your CSS file
import pro1 from "../assets/pic1.jpg";
import pro2 from "../assets/pic2.jpg";
import pro3 from "../assets/pic3.jpg";

const ShopComponent = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'All in One Bottle', price: '$22.00 - $555.00', image: pro1, rating: 4 },
    { id: 2, name: 'Amazon Alexa', price: '$49.00 - $569.00', image: pro2, rating: 5 },
    { id: 3, name: 'All in One Bottle', price: '$22.00 - $555.00', image: pro3, rating: 4 },
    { id: 4, name: 'Amazon Alexa', price: '$49.00 - $569.00', image:"https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-headset-2-420x420.jpg.webp", rating: 5 },
    { id: 5, name: 'All in One Bottle', price: '$22.00 - $555.00', image:'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-watch-2-420x420.jpg.webp', rating: 4 },
    { id: 6, name: 'Amazon Alexa', price: '$49.00 - $569.00', image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-cam-recorder-420x420.jpg.webp', rating: 5 },
    { id: 1, name: 'John Sport Shoes', price: '$22.00 - $555.00', image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-shoes-2-420x420.jpg.webp', rating: 5 },
    { id: 2, name: 'Mouse Raxer3000DPI', price: '$49.00 - $569.00', image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-mouse-420x420.jpg.webp', rating: 4},
    { id: 3, name: 'Santa Monica Facial Cream', price: '$22.00 - $555.00', image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-skin-cream-2-420x420.jpg.webp', rating: 5 },
  ]);

  const [categories, setCategories] = useState([
    'Body Lotion (1)', 'Computer Gadget (3)', 'Electronics (3)', 'Fashion (3)', 'General (1)', 'Shoes (2)', 'Sports (3)', 'Watch (1)', 'Woman Clothes (3)'
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [maxPrice, setMaxPrice] = useState(79);

  const [selectedColor, setSelectedColor] = useState(null);
  const colorOptions = ['red', 'blue', 'green', 'black', 'white', 'gray', 'yellow', 'purple'];

    const [selectedRating, setSelectedRating] = useState(null);

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

  return (
    <div>
        
        <div className="pic-one">
  <img 
    src="https://demo.athemes.com/botiga-multi-vendor/wp-content/uploads/sites/143/2022/12/shop-page-header-bg-1536x346.jpg" 
    alt="Shop-img" 
    className="shop-image" // Add a class for styling the image if needed
  />
  <h2 className="shop-title">SHOP</h2> 
</div>
    <div className="shop-container">
      <aside className="sidebar">
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
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div className="star-rating">
                {[...Array(product.rating)].map((_, i) => (
                    <span key={i} className="star active"></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>
  );
};

export default ShopComponent;