import { Form, Field, Formik } from "formik";
import css from "./MoviesPage.module.css";
import { getSearchMovies } from "../../api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const searchedMovies = await getSearchMovies(searchQuery);
        setSearchedMovies(searchedMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  return (
    <section className={css.container}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values) => setSearchQuery(values.query)}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <MovieList data={searchedMovies} />
    </section>
  );
}
