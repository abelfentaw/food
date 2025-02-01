import React from "react";
import "./AboutUs.css";

const developers = [
  { name: "John Doe", role: "Frontend Developer", img: "/images/dev1.jpg" },
  { name: "Jane Smith", role: "Backend Developer", img: "/images/dev2.jpg" },
  { name: "Mike Johnson", role: "UI/UX Designer", img: "/images/dev3.jpg" },
  { name: "Emily Davis", role: "Full Stack Developer", img: "/images/dev4.jpg" },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Foodie Express</strong>, your one-stop destination for delicious meals
          delivered straight to your doorstep. We partner with top restaurants to bring you the best
          food experience.
        </p>
      </section>

      {/* Developers Section */}
      <section className="developers-section">
        <h2>Meet Our Developers</h2>
        <div className="developers-container">
          {developers.map((dev, index) => (
            <div key={index} className="developer-card">
              <img src={dev.img} alt={dev.name} />
              <h3>{dev.name}</h3>
              <p>{dev.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
