import axios from "axios";

const movieAPI = axios.create();
movieAPI.defaults.baseURL = "https://api.themoviedb.org/3/movie";
movieAPI.defaults.headers.common["accept"] = "application/json";
movieAPI.defaults.headers.common["Authorization"] =
  import.meta.env.VITE_AUTHORIZATION || "";

export default movieAPI;
