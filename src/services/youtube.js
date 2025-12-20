import { YOUTUBE_API_KEY } from '../Constants/constants';

export const getTrailerVideoId = async (query) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${query}&type=video&part=snippet&maxResults=1`
  );
  const data = await response.json();
  return data.items[0]?.id?.videoId || null;
};