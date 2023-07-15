import axios from 'axios';

const neaAPI = axios.create({
    baseURL: "https://api.data.gov.sg/v1/environment",
    timeout: 8000,
  });
  
export default neaAPI;