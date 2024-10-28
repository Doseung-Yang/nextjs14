import { API_URL } from "../(home)/page";

async function getVideos(id: string) {
  console.log(`Fatching viedos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw new Error("something broke..."); 에러 발생시키기
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
