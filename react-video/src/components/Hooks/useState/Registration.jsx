import { useState } from "react";
import "./index.css";

export const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this from to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter firstName"
            required
            value={user.firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter lastName"
            required
            value={user.lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            required
            value={user.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
            value={user.password}
            onChange={handleInputChange}
          />

          <label htmlFor="phone">
            <b>Phone</b>
          </label>
          <input
            type="phone"
            name="phoneNumber"
            id="phone"
            placeholder="98765432110"
            required
            value={user.phoneNumber}
            onChange={handleInputChange}
          />

          <p>
            By creating an account you agree to the{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign up
            </button>
          </div>
        </div>
      </form>
      <section className="summary text-center mt-5">
        <p>
          Hello,my name is
          <span>
            {user.firstName}
            {user.lastName}
            <span />. My email address is <span>{user.email}</span> and my phone number is{" "}
            <span>{user.phoneNumber}</span>
          </span>
        </p>
      </section>
    </>
  );
};
