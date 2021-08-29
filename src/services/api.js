import axios from 'axios';

const api = axios.create({
  baseURL: 'https://landing-page-jobsnet-backend.herokuapp.com/'
});

export default api;