import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=26ddce9d";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Star Wars");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <div className="search">
        <input
          value={searchText}
          placeholder="Search for movies"
          onChange={(e) => setSearchText(e.target.value)}
          />
        <img
          src={SearchIcon}
          alt="search-icon"
          onClick={() => searchMovies(searchText)}
        />
      </div>
      {
      movies?.length > 0 ? (
      <div className="map">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
      ) : (
        <div className="no-movies">
          <h2>No movies found</h2>
    </div>
      )
      }
    </div>
  );
};

export default App;
