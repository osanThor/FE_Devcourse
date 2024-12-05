import axios from "axios";

export const axiosInstace = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yzg0ODE5ZjBiNGNhYWNlOTYxZDQyNjRhMTM5MDdhZCIsIm5iZiI6MTczMzI5MTI2MS4xNzIsInN1YiI6IjY3NGZlY2ZkNWY3NDRiZjE3NDFkZjgzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eNBsFyhU5Wbuaov6rdf2MRGTpyZvxasrl7Y8WDlSb6M",
  },
});
