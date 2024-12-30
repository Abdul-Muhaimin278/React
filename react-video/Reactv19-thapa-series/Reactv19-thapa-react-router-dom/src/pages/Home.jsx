import { Link } from "react-router-dom";

export const Home = () => {
  return (
    // <main></main>
    <section className="hero_section">
      <div className="hero_container">
        <div className="hero--content">
          <p className="hero-subheading">
            Explore the Latest in Movie Industries
          </p>
          <h1 className="hero-heading">Unlimited Movie, TVs Shows, & More.</h1>
          <p className="hero-para">
            Discover the Top Best Movies and Dramas with a catchy subtitle like
            Your Ultimate Guide to Must-Watch Content.
          </p>
          <div className="hero-btn-container">
            <Link to="/movie" className="hero-btn">
              Explore Now
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="./movies.png "
            alt="movies poster"
            className="hero_image"
            width="150"
            height="150"
          />
        </div>
      </div>
    </section>
  );
};
