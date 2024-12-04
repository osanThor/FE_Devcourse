import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Section from "./components/Section";
import movieAPI from "./utils/api/movie";
import { MovieItemType, MovieResponseType } from "./type/movie";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [nowMovies, setNowMovies] = useState<MovieItemType[]>([]);
  const [popMovies, setPopMovies] = useState<MovieItemType[]>([]);
  const [topMovies, setTopMovies] = useState<MovieItemType[]>([]);

  const handleGetMovie = async (category: string): Promise<MovieResponseType> =>
    (await movieAPI.get(`/${category}?language=en-US&page=1`)).data;

  const handleGetAllMovies = async () => {
    setLoading(true);
    try {
      const [now, pop, top] = await Promise.all([
        handleGetMovie("now_playing"),
        handleGetMovie("popular"),
        handleGetMovie("top_rated"),
      ]);
      setNowMovies(now.results);
      setPopMovies(pop.results);
      setTopMovies(top.results);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetAllMovies();
  }, []);

  if (error)
    return (
      <div className="text-rose-600 text-3xl font-bold">
        Error가 발생했습니다. {error}
      </div>
    );

  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 메인 */}
      <Banner />
      {/* 무비 에어리어 */}
      <article className="bg-black py-10 px-4 xs:px-0">
        <Section type="STREAMING" list={nowMovies} loading={loading} />
        <Section type="POPULAR" list={popMovies} loading={loading} />
        <Section type="UPCOMING" list={topMovies} loading={loading} />
      </article>
    </>
  );
}
