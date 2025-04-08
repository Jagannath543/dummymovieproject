import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Card.css';

const Card = ({ movie }) => {
  const { id, title, overview, vote_average, poster_path } = movie;

  // Construct the image URL from the poster_path
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="card">
      <Link to={`/movie/${id}`} className="card-link">  {/* Link to Movie detail page */}
        <img src={imageUrl} alt={title} className="card-image" />  {/* Movie poster image */}
        <div className="card-content">
          <h3 className="card-title">{title}</h3>  {/* Movie title */}
          <p className="card-description">
            {overview ? overview.slice(0, 150) : "No description available."}...
          </p>
          <div className="card-footer">
            <span className="card-rating">Rating: {vote_average}</span>  {/* Movie rating */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;


