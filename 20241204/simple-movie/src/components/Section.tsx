import { MovieItemType } from "../type/movie";
import Item from "./Item";

type SectionType = "STREAMING" | "POPULAR" | "UPCOMING";

export default function Section({
  type,
  list,
  loading,
}: {
  type: SectionType;
  list: MovieItemType[];
  loading: boolean;
}) {
  const title = {
    STREAMING: "Now Playing",
    POPULAR: "Popular",
    UPCOMING: "Upcoming",
  }[type];
  console.log(list);
  return (
    <section className="container mx-auto py-8 text-white">
      <span className="text-yellow-600">ONLINE STREAMING</span>
      <h2 className="text-[36px] font-bold mb-8">{title}</h2>
      {loading ? (
        <div className="text-7xl font-bold py-10 text-center">Loading..</div>
      ) : (
        <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
          {list.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}
