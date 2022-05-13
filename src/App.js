import { useEffect, useState } from "react";
import MovieCard from "./components/movieCard";
//5c9bccb1
//http://www.omdbapi.com/?i=tt3896198&apikey=5c9bccb1
import "./App.css";
import searchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=5c9bccb1";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Inquire</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search for movies"
        />
        <img
          src={searchIcon}
          onClick={() => searchMovies(searchTerm)}
          alt="search icon"
        />
      </div>

      <div className="container">
        {/* movies?.length checks for null */}
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard movie={movie} key={movie.Title + movie.Year} />
          ))
        ) : (
          <div className="empyt">
            <h2>No Movies Found </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
