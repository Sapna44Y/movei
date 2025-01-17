import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./DetailsScreen.css";

const DetailsScreen = () => {
  const { id } = useParams(); // Movie ID from URL
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;

  if (!movie) {
    return (
      <div className="error-message">
        <p>Movie not found!</p>
        <button onClick={() => navigate("/home")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <button className="back-button" onClick={() => navigate("/home")}>
        ← Back
      </button>

      <div className="details">
        <div className="details-header">
          <img
            src={movie.image?.original || "/assets/placeholder.png"}
            alt={movie.name}
            className="details-image"
          />
        </div>

        <div className="details-info">
          <h1 className="details-title">{movie.name}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: movie.summary }}
            className="details-summary"
          />

          <div className="additional-info">
            <p>
              <strong>Language:</strong> {movie.language}
            </p>
            <p>
              <strong>Genres:</strong> {movie.genres.join(", ")}
            </p>
            <p>
              <strong>Premiered:</strong> {movie.premiered}
            </p>
            <p>
              <strong>Runtime:</strong>{" "}
              {movie.runtime ? `${movie.runtime} mins` : "N/A"}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {movie.rating?.average ? `${movie.rating.average}/10` : "N/A"}
            </p>
          </div>

          {movie.officialSite && (
            <a
              href={movie.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="details-link"
            >
              Visit Official Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
