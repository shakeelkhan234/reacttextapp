import React from 'react';
import './ProductList.css'; // Assuming you have a separate CSS file for styling
import a from './images/a.jpg';
import b from './images/b.jpg';
import c from './images/c.jpg';
import d from './images/d.jpg';

// Sample images for the slider background
import sliderImage1 from './images/aicamera.jpg';
import sliderImage2 from './images/robot.jpg';
import sliderImage3 from './images/speaker.jpg';
import sliderImage4 from './images/vacuumcleaner.jpg';

const ProductList = () => {
  // Mock data for products
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$199.99',
      image: a,
      rating: 4,
      reviews: 120,
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$89.99',
      image: b,
      rating: 5,
      reviews: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$149.99',
      image: c,
      rating: 3,
      reviews: 60,
    },
    {
      id: 4,
      name: 'Product 4',
      price: '$249.99',
      image: d,
      rating: 4,
      reviews: 85,
    },
  ];

  return (
    <div className="slider-container">
      {/* Gradient Slider Section */}
      <div className="slider">
        <div className="slider-images">
          {/* Slider Background Images */}
          <div className="slider-image" style={{ backgroundImage: `url(${sliderImage1})` }}></div>
          <div className="slider-image" style={{ backgroundImage: `url(${sliderImage2})` }}></div>
          <div className="slider-image" style={{ backgroundImage: `url(${sliderImage3})` }}></div>
          <div className="slider-image" style={{ backgroundImage: `url(${sliderImage4})` }}></div>
        </div>
        {/* Gradient Overlay */}
        <div className="slider-overlay"></div>
      </div>

      {/* Product List Section */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3 className="product-title">{product.name}</h3>
            <div className="product-rating">
              <span className="stars">{'★'.repeat(product.rating)}</span>
              <span className="reviews">({product.reviews} reviews)</span>
            </div>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
