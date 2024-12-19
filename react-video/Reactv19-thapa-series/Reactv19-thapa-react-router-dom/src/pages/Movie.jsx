import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  return (
    <ul className="container grid grid-four--cols">
      {movieData?.Search.sort(
        (a, b) => parseInt(a?.Year) - parseInt(b?.Year)
      ).map((curMovie) => {
        return <Card key={curMovie?.imdbID} curMovie={curMovie} />;
      })}
    </ul>
  );
};
