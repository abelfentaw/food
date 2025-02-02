import React from 'react';
//import { assets } from '../assets/assets'; // Update path as needed
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="why-choose">
      <h2>Why Foodies Choose Us</h2>
      <div className="choose-grid">
        <div className="choose-item">
          {/* <img src={assets.fast_delivery_icon} alt="Lightning bolt" /> */}
          <h3>Lightning-Fast and Eco-Friendly Delivery</h3>
          <p>Average delivery time of 35 minutes and 100% sustainable packaging and carbon-neutral deliveries</p>
        </div>

        <div className="choose-item">
          {/* <img src={assets.quality_icon} alt="Quality badge" /> */}
          <h3>Quality Guaranteed</h3>
          <p>Partnered with top-rated restaurants & strict quality checks</p>
        </div>


        <div className="choose-item">
          {/* <img src={assets.diet_icon} alt="Diet options" /> */}
          <h3>Diverse Dietary Options</h3>
          <p>500+ vegan, gluten-free, and keto-friendly choices</p>
        </div>

        <div className="choose-item">
          {/* <img src={assets.support_icon} alt="Support" /> */}
          <h3>24/7 Craving Support</h3>
          <p>Live chat support for orders, recommendations, or changes</p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;