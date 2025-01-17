import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/details/${movie.id}`)}
    >
      <img
        src={movie.image?.medium || "/assets/placeholder.png"}
        alt={movie.name}
      />
      <h3>{movie.name}</h3>
      <p dangerouslySetInnerHTML={{ __html: movie.summary }} />
    </div>
  );
};

export default MovieCard;
