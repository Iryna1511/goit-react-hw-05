import { Link } from "react-router-dom";

export default function MovieDetailsPage({ data }) {
  //   const { movieId } = useParams();
  return (
    <div>
      <button>Go back</button>
      <section>
        <img src={data.img} alt={data.dscr} />
        <div>
          <h3>{data.title}</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            rerum laboriosam accusamus facilis deleniti quis eligendi dolores
            vel doloribus corrupti!
          </p>
        </div>
      </section>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
