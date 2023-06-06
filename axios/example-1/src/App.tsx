import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [movies, setMovies] = useState({});

  const fetchMovies = async () => {
    const response = await axios.get(
      `http://omdbapi.com/?apiKey=${API_KEY}&t=Shrek`
    );
    setMovies(response.data);
    return response.data;
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {Object.keys(movies).map((key) => {
        if (key !== "Ratings") {
          return (
            <div>
              <span>Key: {key}</span>
              <span>Value: {movies[key]}</span>
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
