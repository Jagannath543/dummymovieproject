import React from 'react';
import Card from '../../Components/Card/Card';  
import "./Home.css"

const Home = ({ movies }) => {
  return (
    <div className="homeContent">
      <div className="movie-cards">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Card key={index} movie={movie} />  
          ))
        ) : (
          <p>No movies found.</p> 
        )}
      </div>
    </div>
  );
};

export default Home;
