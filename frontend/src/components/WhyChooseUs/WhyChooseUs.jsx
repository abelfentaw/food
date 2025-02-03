import React from 'react';
//import { assets } from '../assets/assets'; // Update path as needed
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="why-choose">
      <h2>Why Choose Us</h2>
      <div className="choose-grid">
        <div className="choose-item">
          {/* <img src={assets.fast_delivery_icon} alt="Lightning bolt" /> */}
          <h3>Lightning-Fast Delivery</h3>
          <p>Average delivery time of 35 minutes and 100% sustainable packaging and deliveries</p>
        </div>

        <div className="choose-item">
          {/* <img src={assets.quality_icon} alt="Quality badge" /> */}
          <h3>Quality Guaranteed</h3>
          <p>Partnered with top-rated restaurants & strict quality checks</p>
        </div>


        <div className="choose-item">
          {/* <img src={assets.diet_icon} alt="Diet options" /> */}
          <h3>Diverse Dietary Options</h3>
          <p>From plant-powered plates to gluten-free indulgences and low-carb innovations, our menu celebrates every way you nourish yourself.</p>
        </div>

        <div className="choose-item">
          {/* <img src={assets.support_icon} alt="Support" /> */}
          <h3>24/7 Customer Support</h3>
          <p>Your satisfaction is our priority. While our kitchens rest, our support team never sleeps! Reach out through these channels:📞 Hotline:
          +251-911-123-456</p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;