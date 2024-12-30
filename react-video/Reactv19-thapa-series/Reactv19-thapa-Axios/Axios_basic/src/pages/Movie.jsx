import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/UI/Card";
import { getMovie } from "../services/GetServices";

export const Movie = () => {
  const [data, setData] = useState([]);

  const API = "http://www.omdbapi.com/?apikey=28e94098&s=star wars";

  const getMoviesData = async () => {
    try {
      const res = await getMovie();
      setData(res?.data?.Search);
    } catch (err) {
      console.error("Error Message", err.message);
      console.error("Error Message", err.response.status);
      console.error("Error Message", err.response.data);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <div className="movie-container">
      <ul className="movie-grid">
        {data?.map((movie) => (
          <Card key={movie.imdbID} movieData={movie} />
        ))}
      </ul>
    </div>
  );
};
