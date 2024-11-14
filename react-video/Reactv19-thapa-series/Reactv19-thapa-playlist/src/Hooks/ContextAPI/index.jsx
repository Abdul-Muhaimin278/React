import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const initialState = { name: "Abdul", age: 19 };

  return (
    <BioContext.Provider value={initialState}>{children}</BioContext.Provider>
  );
};
