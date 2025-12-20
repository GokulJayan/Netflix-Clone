import axios from '../axios';
import { TMDB_API_KEY } from '../Constants/constants';

export const getTrendingMovies = () => {
  return axios.get(`trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`);
};

export const getMoviesByCategory = (path) => {
  return axios.get(`${path}?api_key=${TMDB_API_KEY}&language=en-US`);
};