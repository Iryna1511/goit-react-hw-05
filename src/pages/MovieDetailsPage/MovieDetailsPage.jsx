import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense, useRef, lazy } from "react";
import { getMovieDetails } from "../../api";
const MovieInfo = lazy(() => import("../../components/MovieInfo/MovieInfo"));
// import MovieInfo from "../../components/MovieInfo/MovieInfo";
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

  console.log(movieDetails);
  return (
    <div className={css.container}>
      <p className={css.backLink}>
        <Link to={backLinkRef.current}>Go back</Link>
      </p>

      {loading && <Loader />}
      {movieDetails && <MovieInfo movieDetails={movieDetails} />}
      <div>
        <h3 className={css.info}>Additional information</h3>
        <ul>
          <li className={css.infolink}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.infolink}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
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
