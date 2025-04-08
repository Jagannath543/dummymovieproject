import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ActorDetails.css';

const ActorDetails = () => {
  const { actorId } = useParams();
  const [actor, setActor] = useState({});
  const [actorMovies, setActorMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchActorDetails = (actorId) => {
    setLoading(true);
    axios.get(`https://api.themoviedb.org/3/person/${actorId}`, {
      params: {
        api_key: "94ad1dc27cfaadc07bdc15b1f4c85579",
      },
    })
    .then((response) => {
      setActor(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setError("Error fetching actor details.");
      setLoading(false);
      console.error(error);
    });
  };

  const fetchActorMovies = (actorId) => {
    setLoading(true);
    axios.get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits`, {
      params: {
        api_key: "94ad1dc27cfaadc07bdc15b1f4c85579",
      },
    })
    .then((response) => {
      setActorMovies(response.data.cast);
      setLoading(false);
    })
    .catch((error) => {
      setError("Error fetching actor movies.");
      setLoading(false);
      console.error(error);
    });
  };

  useEffect(() => {
    if (actorId) {
      fetchActorDetails(actorId);
      fetchActorMovies(actorId);
    }
  }, [actorId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="actor-details-container">
      <div className="actor-header">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'cyan', marginBottom: '20px', textAlign: 'center', letterSpacing: '2px' }}>
          {actor.name}
        </h1>

        <div className="actor-img-container">
          <img 
            src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : '/default-avatar.png'} 
            alt={actor.name}
            className="actor-profile-img"
          />
        </div>
      </div>

      <div className="actor-info">
        <p><strong>Biography:</strong> {actor.biography || "Biography not available."}</p>
        <p><strong>Birthday:</strong> {actor.birthday || "Unknown"}</p>
        <p><strong>Place of Birth:</strong> {actor.place_of_birth || "Unknown"}</p>
        <p><strong>Age:</strong> {actor.birthday ? new Date().getFullYear() - new Date(actor.birthday).getFullYear() : "Unknown"}</p>
        <div className="actor-movies">
    <h2> Relative Movies</h2>
    <ul>
        {actorMovies.slice(0, 6).map((movie) => (
            <li key={movie.id} className="movie-item">
                {/* Display Movie Poster */}
                {movie.poster_path && (
                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title} 
                    />
                )}
                <h3>{movie.title}</h3>
                <p>{movie.release_date ? movie.release_date.split('-')[0] : "Unknown"}</p> {/* Showing year of release */}
            </li>
        ))}
    </ul>
</div>

    </div>

     </div>
     
     
     
     
     
  );
  
};



export default ActorDetails;
