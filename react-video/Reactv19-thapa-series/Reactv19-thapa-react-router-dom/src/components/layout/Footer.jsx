import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="content_2">
          <h4>SHOPPING</h4>
          <a>Computer Store</a>
          <a>Laptop Store</a>
          <a>Accessories</a>
          <a>Sales & Discount</a>
        </div>
        <div className="content_3">
          <h4>Experience</h4>
          <Link to="/contact">Contact Us</Link>
          <a>Payment Method</a>
          <a>Delivery</a>
          <a>Return and Exchange</a>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, sales & promos!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>©Copright 2024</p>
        </div>
      </div>
    </footer>
  );
};
