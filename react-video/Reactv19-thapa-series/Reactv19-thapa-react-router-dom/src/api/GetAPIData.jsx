export const getMoviesData = async () => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_API_KEY
      }&s=star wars`
    );

    const data = response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
