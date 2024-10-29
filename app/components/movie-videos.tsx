import { API_URL } from "../(home)/page";
<<<<<<< HEAD

=======
import styles from "../../styles/movie-viedos.module.css";
>>>>>>> a83c323 (hotpix:: movie data & CSS_Module 수정)
async function getVideos(id: string) {
  console.log(`Fatching viedos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw new Error("something broke..."); 에러 발생시키기
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
<<<<<<< HEAD
  return <h6>{JSON.stringify(videos)}</h6>;
=======
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={videos.id}
          src={`https://youtube.com/embed/${video.key}`}
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
>>>>>>> a83c323 (hotpix:: movie data & CSS_Module 수정)
}
