export const getMoviesDetials = async ({ params }) => {
  const { movieID } = params;
  params;

  try {
    const API_KEY = import.meta.env.VITE_API_KEY;

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}`
    );

    const data = response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
