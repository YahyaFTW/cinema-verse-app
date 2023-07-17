import { useEffect, useState } from "react";
import "./App.css";
import SeachIcon from "./assets/search.svg";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=f92bcc86";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const movie = {
    Title: "Baahubali: The Beginning",
    Year: "2015",
    imdbID: "tt2631186",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg",
  };
  const SearchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    SearchMovies("Baahubali");
  }, []);
  return (
    <>
      <div className="app">
        <h1>Cinema Verse</h1>
        <div className="search">
          <input
            id="enterInput"
            placeholder="Search for movies."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* {
           document.getElementById("enterInput").addEventListener("keypress", function(event) {
              if (event.key === "Enter") {
                // event.preventDefault();
                SearchMovies(searchTerm);
              }
            })
          } */}
          <img
            src={SeachIcon}
            alt="search"
            onClick={() => SearchMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
