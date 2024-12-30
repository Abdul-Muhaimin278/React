import "./Card.css";

export const Card = ({ movieData }) => {
  const { Poster, imdbID, Title, Year } = movieData;

  return (
    <div className="card">
      <div className="card__image-container">
        <img src={Poster} alt={Title} className="card__image" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{Title}</h3>
        <p className="card__year">Released: {Year}</p>
        <a href={`/movie/${imdbID}`} className="card__button">
          Watch Now
        </a>
      </div>
    </div>
  );
};
