import { star } from "../assets/assets";
import { MovieItemType } from "../type/movie";

export default function Item({ item }: { item: MovieItemType }) {
  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={`${item.title}-cover`}
        className="rounded-md w-full"
      />
      <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
        <h4 className="">{item.title}</h4>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-200">
        <div className="flex items-center gap-2 font-bold">
          <img
            src={star}
            alt="star"
            width={18}
            height={18}
            className="object-contain"
          />
          <span className="text-yellow-500">
            {item.vote_average.toFixed(1)}
          </span>
        </div>
        <span className="text-yellow-500 font-bold">{item.release_date}</span>
      </div>
    </li>
  );
}
