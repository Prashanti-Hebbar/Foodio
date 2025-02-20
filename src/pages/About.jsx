import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>About CulinaryConnect</h1>

      <section>
        <h2>Our Story</h2>
        <p>
          CulinaryConnect was born from a simple idea: sharing the joy of cooking. We noticed how scattered and disorganized online recipes could be, and how difficult it was to collaborate on a dish with friends or family. We envisioned a central hub where culinary enthusiasts could easily create, share, and discover amazing recipes, all while connecting with a vibrant community. That vision became CulinaryConnect.
        </p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower home cooks and culinary explorers by providing a seamless and collaborative platform for recipe management and sharing. We believe that cooking should be a shared experience, and we're committed to fostering a supportive environment where everyone can learn, grow, and inspire each other in the kitchen.
        </p>
      </section>

      <section>
        <h2>What We Offer</h2>
        <ul>
          <li>
            <strong>Effortless Recipe Management:</strong> Create, edit, and organize your recipes with ease. Our intuitive interface makes it simple to keep track of your culinary creations.
          </li>
          <li>
            <strong>Real-Time Collaboration:</strong> Cook together, even when you're apart! Our real-time collaboration tools allow multiple users to edit and update recipes simultaneously, making meal planning and cooking a truly shared experience.
          </li>
          <li>
            <strong>Secure User Access:</strong> Your recipes and personal information are safe with us. We use robust authentication and authorization to protect your privacy.
          </li>
          <li>
            <strong>Vibrant Community:</strong> Connect with fellow food lovers, share tips and tricks, and discover new culinary inspiration.
          </li>
        </ul>
      </section>

      <section>
        <h2>Join Our Community</h2>
        <p>
          We believe that cooking is more than just following instructions—it's about sharing, connecting, and creating. Join our growing community of food enthusiasts and experience the joy of collaborative cooking! <a href="/signup">Sign Up/Explore Recipes</a> {/* Replace with your actual link */}
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Have questions, feedback, or suggestions? We'd love to hear from you! Get in touch with us at <a href="mailto:info@culinaryconnect.com">info@culinaryconnect.com</a> or through our <a href="/contact">Contact Form/Social Media Links</a>. {/* Replace with your actual links */}
        </p>
      </section>
    </div>
  );
};

export default About;