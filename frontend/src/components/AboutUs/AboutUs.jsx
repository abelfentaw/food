import React from "react";
import "./AboutUs.css";
import { assets } from '../../assets/assets';

const developers = [
  { 
    name: "John Doe", 
    role: "Frontend Developer", 
    img: assets.profile_icon,
    bio: "Specialized in React and modern web architectures",
    social: "@johndoe"
  },
  { 
    name: "Jane Smith", 
    role: "Backend Developer", 
    img: assets.profile_icon,
    bio: "Expert in Node.js and cloud infrastructure",
    social: "@janesmith"
  },
  { 
    name: "Mike Johnson", 
    role: "UI/UX Designer", 
    img: assets.profile_icon,
    bio: "Passionate about user-centered design systems",
    social: "@mikejohn"
  },
  { 
    name: "Emily Davis", 
    role: "Full Stack Developer", 
    img: assets.profile_icon,
    bio: "Full stack wizard with DevOps experience",
    social: "@emilyd"
  },
  { 
    name: "Sarah Wilson", 
    role: "Mobile Developer", 
    img: assets.profile_icon,
    bio: "Cross-platform mobile development expert",
    social: "@sarahw"
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About MEAD</h1>
          <p className="hero-text">
            Revolutionizing Food Delivery in Addis Ababa
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At MEAD, we're passionate about connecting food lovers with their favorite 
            local flavors. Whether you're craving sizzling burgers, authentic ethnic cuisine, 
            or healthy salads, we bring the restaurant experience to your doorstep. 
            With partnerships across Addis Ababa's top eateries, your culinary adventure 
            is just a few taps away.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header">
          <h2>Meet The Team</h2>
          <p className="section-subtitle">The minds behind your food experience</p>
        </div>
        
        <div className="team-grid">
          {developers.map((dev, index) => (
            <div key={index} className="team-member">
              <div className="member-image-container">
                <div className="image-wrapper">
                  <img 
                    src={dev.img} 
                    alt={dev.name} 
                    className="member-image"
                    loading="lazy"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
              <div className="member-info">
                <h3>{dev.name}</h3>
                <p className="role">{dev.role}</p>
                <p className="bio">{dev.bio}</p>
                <p className="social-handle">{dev.social}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;