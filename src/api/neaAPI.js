import axios from 'axios';

const neaAPI = axios.create({
  baseURL: 'https://api.data.gov.sg/v1/environment',
  timeout: 8000,
});

const fetchRelativeHumidity = () => {
  return neaAPI.get('/relative-humidity');
};

const fetchAirTemperature = () => {
  return neaAPI.get('/air-temperature');
};

export { fetchRelativeHumidity, fetchAirTemperature };
export default neaAPI;
