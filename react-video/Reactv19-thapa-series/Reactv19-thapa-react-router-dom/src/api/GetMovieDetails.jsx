export const getMoviesDatials = async ({ params }) => {
  const { movieID } = params;

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_API_KEY
      }&i=${movieID}`
    );

    const data = response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
