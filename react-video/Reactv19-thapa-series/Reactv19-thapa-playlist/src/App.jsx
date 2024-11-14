import "./App.css";
import { DarkLight, ThemeProvider } from "./Hooks/ContextAPI/DarkLightTheme";

function App() {
  return (
    <ThemeProvider>
      <DarkLight />
    </ThemeProvider>
  );
}

export default App;
