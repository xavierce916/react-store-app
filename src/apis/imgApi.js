import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

export async function getFirstImage(query) {

  const { VITE_FLICKR_API_KEY } = getEnvVariables();
  
  const config = {
    params: {
      method: "flickr.photos.search",
      api_key: VITE_FLICKR_API_KEY,
      text: query,
      format: "json",
      nojsoncallback: 1
    }
  };

  const res = await axios.get("https://api.flickr.com/services/rest", config);

  if (res.data.photos.photo.length > 0) {
    const photo = res.data.photos.photo[1];
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  } else {
    return null;
  }
}

