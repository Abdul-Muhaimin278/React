import { use, useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("Dark");

  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "Dark" ? "Light" : "Dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, handleToggleTheme } = use(ThemeContext);

  return (
    <section
      className={`d-flex flex-column align-items-center justify-content-center ${
        theme === "Dark" ? "bg-secondary" : "bg-white"
      } `}
      style={{ height: "100vh" }}
    >
      <div>
        <h1 className={` ${theme === "Dark" ? "text-light" : "text-black"} `}>
          Dark Light Theme Page
        </h1>
        <p className={` ${theme === "Dark" ? "text-light" : "text-black"} `}>
          This is in react v19
        </p>
        <h6
          className={` ${theme === "Dark" ? "text-light" : "text-black"} `}
        >{`The ${theme} Mode is currently active`}</h6>
        <button
          onClick={handleToggleTheme}
          className={`btn ${theme === "Dark" ? "btn-light" : "btn-secondary"} `}
        >
          {theme === "Dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </section>
  );
};
