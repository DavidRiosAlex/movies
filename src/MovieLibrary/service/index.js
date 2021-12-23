import axios from 'axios';

const call = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/now_playing?',
  timeout: 5000,
});

export default call;