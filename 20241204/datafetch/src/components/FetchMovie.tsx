import axios from "axios";
import { useEffect } from "react";

export default function FetchMovie() {
  const getMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yzg0ODE5ZjBiNGNhYWNlOTYxZDQyNjRhMTM5MDdhZCIsIm5iZiI6MTczMzI5MTI2MS4xNzIsInN1YiI6IjY3NGZlY2ZkNWY3NDRiZjE3NDFkZjgzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eNBsFyhU5Wbuaov6rdf2MRGTpyZvxasrl7Y8WDlSb6M",
        },
      }
    );
    console.log(data);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <div>FetchMovie</div>;
}
