import React from 'react';
import { useParams } from 'react-router-dom';
import  '../style/Modal.css';

const products = [
  {
    id: 1,
    image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-water-bottle-420x420.jpg.webp',
    name: 'All In One Bottle',
    price: '$22.00 - $55.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
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

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p><strong>Quality:</strong> {product.quality}</p>
      <p><strong>Location:</strong> {product.location}</p>
      <div className="colors">
        {product.colors.map((color, i) => (
          <div key={i} className="color-circle" style={{ backgroundColor: color }}></div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
