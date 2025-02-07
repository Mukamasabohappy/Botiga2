import "../Style/Home.css";
import NewArrivals from "./Arrival";
import VendorList from "./Vendor";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
    <div className="sub-nav">
      <div className="side-bar">
         
            {[
              "Electronics",
              "Computer Gadget",
              "Fashion",
              "Body Lotion",
              "Sports",
              "Woman Clothes",
              "Shoes",
              "Watches",
            ].map((category) => (
              <p key={category}>{category}</p>
            ))}
          
        </div>
        <div className="hero-section">
        <h1>Explore our latest and greatest electronics</h1>
        <button className="shop-button">SHOP NOW</button>
      </div>
      </div>
      <div className="content">
        {/* Sidebar Categories */}
        

        {/* Popular Categories */}
        <div className="popular-categories">
          <h2>Popular Categories</h2>
          <div className="categories-grid">
            {[
              { name: "Body Lotion", img: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-1.jpg.webp" },
              { name: "Sports", img: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-2.jpg.webp" },
              { name: "Computer Gadget", img: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-3.jpg.webp" },
              { name: "Electronics", img: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-8-1.jpg.webp" },
              { name: "Watch", img: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-9.jpg.webp" },
              { name: "Woman Clothes", img: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-category-10.jpg.webp" },
            ].map((item) => (
              <div key={item.name} className="category-card">
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NewArrivals/>
      <VendorList/>
    </div>
  );
}

export default Home;
