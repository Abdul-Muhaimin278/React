import axios from "axios";

const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

//creating a get req function
export const getMovie = () => {
  return api.get("?apikey=28e94098&s=star wars");
};
