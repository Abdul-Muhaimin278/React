import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  const titles = {
    2014: true,
    2019: true,
    2021: true,
    2024: true,
  };

  return (
    <ul className="container grid grid-four--cols">
      {movieData?.Search
        // .filter((curMovie) => titles[curMovie?.Year])
        .sort((a, b) => parseInt(a?.Year) - parseInt(b?.Year))
        .map((curMovie) => {
          return <Card key={curMovie?.imdbID} curMovie={curMovie} />;
        })}
    </ul>
  );
};
