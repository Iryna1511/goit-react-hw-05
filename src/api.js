import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDcyNmMwZTgzNDA4ZGE0YzI4M2FlMmFiNjgyODQwZiIsInN1YiI6IjY2NTBiZDc2OGU1MTZmMGI3YWVjNWIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.60y_lNqnZn0yj6oJYn2awMV4M0FA7UawlDUULV24pL8",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);

  console.log(response);
  return response.data.results;
};

export const getSearchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDcyNmMwZTgzNDA4ZGE0YzI4M2FlMmFiNjgyODQwZiIsInN1YiI6IjY2NTBiZDc2OGU1MTZmMGI3YWVjNWIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.60y_lNqnZn0yj6oJYn2awMV4M0FA7UawlDUULV24pL8",
    },
  });

  console.log(response);
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);
  console.log(response.data);
  return response.data;
};
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDcyNmMwZTgzNDA4ZGE0YzI4M2FlMmFiNjgyODQwZiIsInN1YiI6IjY2NTBiZDc2OGU1MTZmMGI3YWVjNWIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.60y_lNqnZn0yj6oJYn2awMV4M0FA7UawlDUULV24pL8",
//   },
// };

// fetch("/search/movie", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
