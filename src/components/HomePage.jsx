import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Website</h1>
          <p>Your journey to excellence begins here.</p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <div className="container">
          <div className="intro-content">
            <img
              src="https://i.ibb.co/1XjVB9J/445234481-1917409708688880-8235258242458060738-n.jpg" // Replace with your image URL
              alt="Zubayer Hossen"
              className="intro-img"
            />
            <div className="intro-text">
              <h2>About Me</h2>
              <p>
                Zubayer Hossen
                is a dedicated and skilled web developer and student with a
                passion for enhancing his community through digital innovation.
                As the vice president and publicity editor of the local
                organization "ইশাস সংগঠন," he actively contributes to various
                human welfare initiatives and developmental activities. Zubayer
                is also an enthusiastic learner, currently focused on his IELTS
                preparation and honing his spoken English skills. His expertise
                in web development is demonstrated through his work on creating
                responsive, animated, and engaging websites, including projects
                that showcase class videos and homework assignments. In his free
                time, he enjoys morning walks and exploring new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
