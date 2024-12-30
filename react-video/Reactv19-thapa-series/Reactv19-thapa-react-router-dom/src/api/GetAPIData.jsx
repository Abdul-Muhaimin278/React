export const getMoviesData = async (search) => {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch movies:", err);
    return null;
  }
};
