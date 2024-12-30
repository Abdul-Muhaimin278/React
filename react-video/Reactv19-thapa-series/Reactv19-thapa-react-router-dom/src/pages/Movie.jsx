import { useState } from "react";
import { Card } from "../components/UI/Card";
import { getMoviesData } from "../api/GetAPIData";
import { Loader } from "../components/layout/Loader";
import { useNavigation } from "react-router-dom";

export const Movie = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loader />;

  const [searchMovie, setSearchMovie] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchMovie = (event) => {
    setSearchMovie(event.target.value);
  };

  const handleSearchBtn = async (search) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getMoviesData(search);
      setMovieData(data);
    } catch (err) {
      setError("Failed to fetch movies. Please try again.");
    } finally {
      setLoading(false);
      setSearchMovie("");
    }
  };

  return (
    <>
      <form
        className="search-container"
        onSubmit={(event) => {
          event.preventDefault();
          handleSearchBtn(searchMovie.trim() || "Sherlock Holmes");
        }}
      >
        <input
          type="text"
          value={searchMovie}
          onChange={handleSearchMovie}
          placeholder="Movie Name"
          className="search-movie"
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {movieData?.Search?.length > 0 ? (
        <ul className="container grid grid-auto--cols">
          {movieData.Search.map((curMovie) => (
            <Card key={curMovie.imdbID} curMovie={curMovie} />
          ))}
        </ul>
      ) : (
        <div className="movie-default">
          <p>No movies found. Try a different search term.</p>
        </div>
      )}
    </>
  );
};
