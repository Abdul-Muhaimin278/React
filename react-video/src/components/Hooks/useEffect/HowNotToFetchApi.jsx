import { useState, useEffect } from "react";
import "./Pokemon.css";
export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = async () => {
    await fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(apiData);

  if (apiData) {
    return (
      <section className="container">
        <header>
          <h1 className="text-capitalize">lets catch Pokémon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={apiData.sprites.other.dream_world.front_default}
                alt={apiData.name}
              />
            </figure>
            <h1>{apiData.name}</h1>
          </li>
        </ul>
      </section>
    );
  }
};
