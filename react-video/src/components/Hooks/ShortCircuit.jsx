import { useState } from "react";
import "./EV.css"

const ShortCircuitExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState('');
  return (
    <section className="container short-container">

      <h1>Welcome to ShortCircuit Evaluation</h1>

      {isLoggedIn && <p>You are logged in!</p>}

      {user ? `Hello, ${user}` : "Please log in!"}

      <div className="grid-three-cols">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
        <button onClick={() => setUser("Abdul Muhaimin")}>Set User</button>
        <button onClick={() => setUser("")}>Clear User</button>
      </div>
    </section>
  )
}

export default ShortCircuitExample;