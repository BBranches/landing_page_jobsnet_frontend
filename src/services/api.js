import axios from 'axios';

const api = axios.create({
  baseURL: 'https://landing-page-jobsnet-backend.herokuapp.com' //'http://localhost:5000' 
});

export default api;