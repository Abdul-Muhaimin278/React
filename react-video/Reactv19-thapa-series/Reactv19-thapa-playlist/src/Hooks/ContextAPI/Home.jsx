import { useContext } from "react";
import { BioContext } from ".";

export const Home = () => {
  const { name, age } = useContext(BioContext);

  return (
    <h1>
      hello,Context API.My name is {name}, i am {age} years old.
    </h1>
  );
};
