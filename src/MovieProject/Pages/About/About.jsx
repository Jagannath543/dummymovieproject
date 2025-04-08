// src/components/About.jsx
import React from 'react';
import './About.css';

// Sample Data for the movie website's About page
const services = [
  {
    title: 'Movies Database',
    description:
      'Explore a vast collection of movies and TV shows, sorted by genre, release date, popularity, and more. Whether you’re looking for classic films or the latest blockbusters, we’ve got you covered.',
  },
  {
    title: 'Movie Recommendations',
    description:
      'Get personalized movie recommendations based on your viewing history and ratings. Our system analyzes your preferences to suggest films you’ll love.',
  },
  {
    title: 'Ratings & Reviews',
    description:
      'Read and contribute user reviews for movies you love (or dislike). Our user ratings and reviews help guide others to discover great content.',
  },
  {
    title: 'Watch Trailers',
    description:
      'Stay up-to-date with the latest movie trailers. Get an early look at upcoming films before they hit theaters or streaming platforms.',
  },
];

const teamMembers = [
  {
    name: 'HTML for Movie Website:',
    role: 'In HTML, the role attribute is used to define the specific function or purpose of an element within a web page, especially for accessibility purposes. It helps assistive technologies understand the meaning or behavior of an element.'
   
  },
  {
    name: 'CSS for Movie Website:',
    role: 'CSS (Cascading Style Sheets) is used to control the visual presentation of a movie website. It allows you to style various elements of the site, such as movie cards, navigation bars, headers, footers, buttons, and more. For a movie website, you can use CSS to:',
    
  },
  {
    name: 'JavaScript for Movie Website:',
    role: 'JavaScript is essential for adding interactivity and dynamic behavior to a movie website. It enables a more engaging experience for users by handling things like user input, dynamic content updates, and functionality like movie searches ',
    
  },
  {
    name: 'ReactJS for Movie Website:',
    role: 'ReactJS is a powerful JavaScript library for building user interfaces that can efficiently update and render changes based on data. In the context of a movie website',
   
  },
];

const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1 className="about-header-title">About Us</h1>
        <p className="about-header-subtitle">
          Welcome to Trailer, your ultimate source for everything movies and TV shows!
        </p>
      </header>

      {/* Services Section */}
      <section className="about-section">
        <h2 className="section-title">Our Features</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section">
        {/* <h2 className="section-title">what are using Language in moviewebsite </h2> */}
        <h2
  className="section-title"
 // Change the color to your preferred color
>
  What are the Languages used in Movie Website
</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
            
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">Join the Trailer Community</h2>
        <p className="cta-description">
          Dive into the world of movies and TV shows. Join us and explore endless entertainment possibilities. Share your thoughts, reviews, and be part of a growing community!
        </p>
        <a href=""><button className="cta-button">Get Started</button></a>
      </section>
    </div>
  );
};

export default About;
