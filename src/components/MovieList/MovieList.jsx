import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ data }) {
  return (
    <ul>
      {data.map((movie) => (
        <li className={css.item} key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
