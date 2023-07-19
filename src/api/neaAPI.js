<<<<<<< HEAD
import axios from 'axios';

const neaAPI = axios.create({
    baseURL: "https://api.data.gov.sg/v1/environment",
    timeout: 8000,
    /*headers: {  
      'Access-Control-Allow-Origin' : 'https://api.data.gov.sg/v1/environment',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }, */
  });
  
export default neaAPI;
=======
import axios from "axios";

const neaAPI = axios.create({
    baseURL: "https://api.data.gov.sg/v1/environment/pm25",
    timeout: 8000,
  });
  
  export default neaAPI;
  
>>>>>>> origin/feature-pm2.5-branch
