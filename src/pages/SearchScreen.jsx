import React, { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "./SearchScreen.css";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then((response) => setResults(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit">Search</button>
      </form>
      <div className="movies-grid">
        {results.map((movie) => (
          <MovieCard key={movie.show.id} movie={movie.show} />
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
