export const getMoviesData = async () => {
  console.log("things");
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=28e94098&t=godzilla"
    );

    const data = response.json();
    console.log("async data", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
