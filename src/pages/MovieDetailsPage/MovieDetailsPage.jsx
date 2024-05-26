import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../../api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // getMovieDetails(movieId)
    //   .then((data) => setMovieDetails(data))
    //   .catch((e) => console.log(e));
    const openDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    openDetails();
  }, [movieId]);

  console.log(movieDetails);

  return (
    <div>
      <button>Go back</button>
      <section>
        {/* <img src={movieDetails.poster_path} alt={`poster ${movieDetails.title}`} /> */}
        <div>
          <h3>{movieDetails.title}</h3>
          <h4>Year</h4>
          <p>{movieDetails.release_date}</p>
          <h4>Overview</h4>
          <p>{movieDetails.overview}</p>
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
        <Outlet />
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
