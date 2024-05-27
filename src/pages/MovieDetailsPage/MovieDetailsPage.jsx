import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense, useRef } from "react";
import { getMovieDetails } from "../../api";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    const openDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    openDetails();
  }, [movieId]);
  return (
    <div className={css.container}>
      <p className={css.backLink}>
        <Link to={backLinkRef.current}>Go back</Link>
      </p>

      {loading && <Loader />}
      {movieDetails !== null && (
        <section className={css.section}>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}
  `}
            alt={`poster ${movieDetails.title}`}
          />
          <div className={css.details}>
            <h3 className={css.title}>{movieDetails.title}</h3>
            {movieDetails.tagline && (
              <p className={css.slug}>{movieDetails.tagline}</p>
            )}
            <ul className={css.descr}>
              <li>
                <h4 className={css.subtitle}>Year</h4>
                <p className={css.text}>{movieDetails.release_date}</p>
              </li>
              <li>
                <h4 className={css.subtitle}>Overview</h4>
                <p className={css.text}>{movieDetails.overview}</p>
              </li>
              <li>
                <h4 className={css.subtitle}>Genres</h4>
                <ul className={css.genres}>
                  {movieDetails.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </section>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

// {adult: false, backdrop_path: '/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg', belongs_to_collection: null, budget: 0, genres: Array(2), …}
// adult
// :
// false
// backdrop_path
// :
// "/3TNSoa0UHGEzEz5ndXGjJVKo8RJ.jpg"
// belongs_to_collection
// :
// null
// budget
// :
// 0
// genres
// :
// (2) [{…}, {…}]
// homepage
// :
// "https://www.netflix.com/title/81012048"
// id
// :
// 614933
// imdb_id
// :
// "tt14856980"
// origin_country
// :
// ['US']
// original_language
// :
// "en"
// original_title
// :
// "Atlas"
// overview
// :
// "A brilliant counterterrorism analyst with a deep distrust of AI discovers it might be her only hope when a mission to capture a renegade robot goes awry."
// popularity
// :
// 298.938
// poster_path
// :
// "/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg"
// production_companies
// :
// (4) [{…}, {…}, {…}, {…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "2024-05-23"
// revenue
// :
// 0
// runtime
// :
// 120
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// "The future of humanity is in her hands."
// title
// :
// "Atlas"
// video
// :
// false
// vote_average
// :
// 6.8
// vote_count
// :
// 156
// [[Prototype]]
// :
// Object
