import styles from "../../styles/home.module.css";
import Movie from "../components/movie";

export async function generateMetadata() {
  return {
    title: "Home",
  };
}

async function getMovies() {
  const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
