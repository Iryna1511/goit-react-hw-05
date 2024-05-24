export default function MovieList({ data }) {
  return (
    <ul>
      {data.map((movie) => (
        <li key={movie.id}>
          <p>{movie.title}</p>
        </li>
      ))}
    </ul>
  );
}
