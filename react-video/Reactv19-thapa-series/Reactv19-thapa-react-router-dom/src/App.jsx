import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import "./App.css";

const App = () => {
  const getMoviesData = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_API_KEY
        }&s=godzilla`
      );

      const data = response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/movie", element: <Movie />, loader: getMoviesData },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
