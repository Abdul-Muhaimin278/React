import { useLoaderData, useNavigate } from "react-router-dom";

export const MovieDetails = () => {
  const navigate = useNavigate();
  const movieData = useLoaderData();

  console.log(movieData);

  const {
    Actors,
    Poster,
    Title,
    Runtime,
    Genre,
    Plot,
    BoxOffice,
    Rated,
    Ratings,
  } = movieData;

  const Timeline = (time) => {
    const totalMinutes = time.replace("min", "");
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const formattedTime = `${hours}hr ${minutes}min`;
    return formattedTime;
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="movie-section">
      <div className="">
        <figure className="movie">
          <div className="movie__hero">
            <img src={Poster} alt="Rambo" className="movie__img" />
          </div>
          <div className="movie__content">
            <h1 className="movie__title">{Title}</h1>
            <div className="movie__details">
              <span className="movie__detail">{`${Rated} / ${Timeline(
                Runtime
              )} / ${Genre}`}</span>
            </div>
            <div className="movie__summary">
              <p className="summary_label">Summary</p>
              <p className="summary_plot">{Plot}</p>
            </div>
            <br />
            <p className="movie__actors">{Actors}</p>
            <p className="movie__detail">Box office: {BoxOffice}</p>
            <div className="movie__back">
              <button className="back_btn" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};
