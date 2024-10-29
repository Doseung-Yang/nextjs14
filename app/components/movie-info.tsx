import { API_URL } from "../(home)/page";
<<<<<<< HEAD

=======
import potato from "../../styles/movie-info.module.css";
>>>>>>> a83c323 (hotpix:: movie data & CSS_Module 수정)
async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
<<<<<<< HEAD
  return <h6>{JSON.stringify(movie)}</h6>;
=======
  return (
    <div className={potato.container}>
      <img
        src={movie.poster_path}
        className={potato.poster}
        alt={movie.title}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
>>>>>>> a83c323 (hotpix:: movie data & CSS_Module 수정)
}
