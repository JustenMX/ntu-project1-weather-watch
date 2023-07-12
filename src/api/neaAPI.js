import axios from "axios";

const neaAPI = axios.create({
    baseURL: "https://api.data.gov.sg/v1/environment/pm25",
    timeout: 8000,
  });
  
  export default neaAPI;
  