import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ curMovie }) => {
  const { Poster, imdbID, Title, Year } = curMovie;

  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <h4 className="margin-bottom">Name: {Title}</h4>
            <h4 className="margin-bottom">Released: {Year}</h4>
            <Link to={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};
