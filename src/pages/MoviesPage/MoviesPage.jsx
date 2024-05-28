import { Form, Field, Formik } from "formik";
import css from "./MoviesPage.module.css";
import { getSearchMovies } from "../../api";
import { useEffect, useState, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

export default function MoviesPage() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchParms, setSearchParams] = useSearchParams();
  //   const movieFilter = searchParms.get("query") ?? "";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const searchedMovies = await getSearchMovies(
          searchParms.get("query") || searchQuery
        );
        setSearchedMovies(searchedMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchQuery]);

  const handleSearch = (values, actions) => {
    searchParms.set("query", values.query);
    setSearchParams(searchParms);

    setSearchQuery(values.query);
    actions.resetForm();
  };

  return (
    <section className={css.container}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSearch}>
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
      {loading && <Loader />}
    </section>
  );
}
