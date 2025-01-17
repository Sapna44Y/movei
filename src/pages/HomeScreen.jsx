import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import "./HomeScreen.css";

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home-container">
      <SearchBar />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.show.id} movie={movie.show} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
