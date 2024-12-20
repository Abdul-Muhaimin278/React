import { NavLink, useLoaderData } from "react-router-dom";

export const MovieDetails = () => {
  const movieData = useLoaderData();

  const {
    Actors,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbRating,
  } = movieData;

  const Timeline = (time) => {
    const totalMinutes = time.replace("min", "");
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const formattedTime = `${hours}hr ${minutes}min`;
    return formattedTime;
  };

  return (
    <section className="movie-section">
      <div className="">
        <figure className="movie">
          <div className="movie__hero">
            <img src={Poster} alt="Rambo" className="movie__img" />
          </div>
          <div className="movie__content">
            <div className="movie__title">
              <h1 className="heading__primary">
                {Title} <i className="fas fa-fire"></i>
              </h1>
              <div className="movie__tag">{`#${Type}`}</div>
              <div className="movie__tag">Year:{Year}</div>
              <div className="movie__detail">
                <span className="icons icons-grey">
                  <i className="fas fa-clock"></i>
                </span>
                {Timeline(Runtime)}
              </div>
            </div>

            <p className="movie__description">{Plot}</p>
            <br />
            <p className="movie__description">Genre: {Genre}</p>
            <p className="movie__description">Actors: {Actors}</p>
            <div className="movie__details">
              <p className="movie__detail">Rating: {imdbRating}</p>
              <p className="movie__detail">
                <span className="icons"></span>
                {BoxOffice}
              </p>
            </div>
            <div>
              <NavLink
                to="/movie"
                className="movie__tag movie__tag--2"
                style={{ textAlign: "center", fontSize: "1.6rem" }}
              >
                Go Back
              </NavLink>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};
