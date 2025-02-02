import React from 'react';

import './HowItWorks.css';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {

    const navigate = useNavigate();

    const handleMenuNavigation = () => {
        window.scrollTo(0, 0); // Scroll to top first
        navigate('/menu'); // Then navigate
      };


  const steps = [
    {
      title: "Browse Restaurants",
      text: "Explore diverse cuisines from top local eateries"
    },
    {
      
      title: "Customize & Order",
      text: "Build your meal with special instructions"
    },
    {
      
      title: "Real-Time Tracking",
      text: "Follow your order from kitchen to doorstep"
    },
    {
      
      title: "Enjoy!",
      text: "Relish restaurant-quality meals at home"
    }
  ];

  return (
    <section className="how-it-works">
      <div className="works-container">
        <h2>How It Works</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
        <section className="how-it-works">
        <button className="cta-button" onClick={handleMenuNavigation}>Start Ordering Now</button>
        </section>
      </div>
    </section>
  );
};

export default HowItWorks;