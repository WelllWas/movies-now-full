import axios from "axios";

export async function getMovieDetails(title:string){
  title.replace(/\s/g, "");
  return await axios.post("http://localhost:3001/movies", {
    title
  })
}