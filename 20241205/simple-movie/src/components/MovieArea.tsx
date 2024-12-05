import MovieItem from "./MovieItem";

export default function MovieArea({
  movies,
  title,
}: {
  movies: MovieItem[];
  title: string;
}) {
  return (
    <article className="bg-black py-10 px-4 xs:px-0">
      <section className="container mx-auto py-8 text-white">
        <span className="text-yellow-600">ONLINE STREAMING</span>
        <h2 className="text-[36px] font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
          {/* 아이템 1개 */}
          {movies.length > 0 &&
            movies.map((movie) => <MovieItem key={movie.id} {...movie} />)}
        </div>
      </section>
    </article>
  );
}
