import { Suspense } from "react";
<<<<<<< HEAD
import { API_URL } from "../../../(home)/page";
=======
>>>>>>> a83c323 (hotpix:: movie data & CSS_Module 수정)
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
