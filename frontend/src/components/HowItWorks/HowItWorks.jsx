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
      title: "Discover Flavors",
      text: "Dive into our curated selection of signature dishes "
    },
    {
      
      title: "Swift Selection",
      text: "Add your favorites in seconds. Our pre-crafted dishes are kitchen-ready, ensuring consistent quality with every order."
    },
    {
      
      title: "Seamless Checkout",
      text: "Review your order and pay securely."
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