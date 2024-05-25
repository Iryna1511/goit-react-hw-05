import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../api";
import { useEffect, useState } from "react";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const moviesData = await getTrendingMovies();
        setTrendMovies(moviesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovies();
  }, []);
  return (
    <section className={css.container}>
      <h2 className={css.title}>Trending today</h2>
      <MovieList data={trendMovies} />
    </section>
  );
}
