// css
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// dependencies
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// pages
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import WatchList from "./pages/WatchList";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

// components
import PsiNeaContainer from "./components/PsiNeaContainer";
import Pm25NeaContainer from "./components/Pm25NeaContainer";
import Weather2HrsContainer from "./components/Weather2HrsContainer";
import WetbulbTempContainer from "./components/WetbulbTempContainer";
import UvNeaContainer from "./components/UvNeaContainer";
// data
import regionalData from "./data/regionalData";
import neaAPI from "./api/neaAPI";

function App() {
  // state management
  const [region, setRegion] = useState(regionalData);
  const [selectRegion, setSelectRegion] = useState("");
  const [watchList, setWatchList] = useState([]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [psiObject, setPsiObject] = useState([]);
  const [pm25Data, setPm25Data] = useState({});
  const [uvIndex, setUvIndex] = useState(null);
  const [weather2HrForecast, setWeather2HrForecast] = useState([]); // forecast state with empty array to store API array
  const [weather2HrSelectedRegionForcast, setWeather2HrSelectedRegionForecast] =
    useState(""); // state with empty string to store selectedAreaForecast.forecast from Weather2Hrs.jsx
  const [dryTemperatureData, setDryTemperatureData] = useState(null);
  const [humidityData, setHumidityData] = useState(null);

  //////////////////////////////
  // GET ALL API
  //////////////////////////////

  const fetchPsiData = async () => {
    try {
      const response = await neaAPI.get(`/psi`);
      setPsiObject(
        response.data.items[0]["readings"]["psi_twenty_four_hourly"]
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchPm25Data = async () => {
    try {
      const response = await neaAPI.get(`/pm25`);
      const data = response.data.items[0]?.readings?.pm25_one_hourly;
      setPm25Data(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchUvIndexData = async () => {
    try {
      const response = await neaAPI.get(`/uv-index`);
      // console.log(response.data);
      setUvIndex(response.data);
      const uvIndexData = response.data.items[0].index[0].value;
      setUvIndex(uvIndexData);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchWeather2HrForecastData = async () => {
    try {
      const response = await neaAPI.get(`/2-hour-weather-forecast`);
      const { forecasts } = response.data.items[0]; // forecasts here = response.data.item[0].forecasts
      console.log(forecasts);
      setWeather2HrForecast(forecasts); // update state with latest item[0].forecasts array
    } catch (error) {
      console.error("Error fetching weather forecast:", error);
    }
  };

  useEffect(() => {
    fetchPsiData();
    fetchPm25Data();
    fetchUvIndexData();
    fetchWeather2HrForecastData();
  }, []);

  //API Call to fetch Air Temp and Humidity
  // Fetching the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dryTempResponse = await neaAPI.get(`/air-temperature`);
        const humidityResponse = await neaAPI.get(`/relative-humidity`);
        setDryTemperatureData(dryTempResponse.data);
        setHumidityData(humidityResponse.data);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };
    fetchData();
  }, []);

  //////////////////////////////
  // Handlers
  //////////////////////////////

  // handler Selected Option
  const handlerSelectOption = (value) => {
    if (value === "" || value === "Choose your location") {
      setIsOptionSelected(false);
      toast.warning("Please select a valid location");
    } else {
      setIsOptionSelected(true);
      setSelectRegion(value);
    }
  };

  //handler to Add WatchList
  const handlerAddWatchList = () => {
    // I do not need this but this adds as an additional safety barrier
    // will decide later if i need to remove the validation for the onclick
    if (selectRegion === "") {
      setIsOptionSelected(false);
      toast.error("Please select a valid location");
    } else {
      const newWatchList = {
        region: selectRegion,
      };
      // Check if the same region is already in the watchlist
      const checkDuplicates = watchList.some(
        (watchItem) => watchItem.region === selectRegion
      );
      if (checkDuplicates) {
        toast.error("You already have this location in your watch list");
      } else {
        setWatchList((prevState) => [...prevState, newWatchList]);
        toast.success(`You have added ${selectRegion} to your watch list`);
      }
    }
  };

  // callback function to get selectedAreaForecast.forecast weather condition from Weather2Hrs.jsx
  const handlerSelectedRegionForecast = (selectedRegionForecast) => {
    console.log("Selected Forecast:", selectedRegionForecast);
    setWeather2HrSelectedRegionForecast(selectedRegionForecast);
  };

  //////////////////////////////
  // debug
  //////////////////////////////

  console.log(region);
  console.log(selectRegion);
  console.log(psiObject);
  console.log("pm25Data");
  console.log(pm25Data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="dashboard"
          element={
            <Dashboard
              region={region}
              selectRegion={selectRegion}
              handlerSelectOption={handlerSelectOption}
              handlerAddWatchList={handlerAddWatchList}
              ToastContainer={ToastContainer}
              watchList={watchList}
              isOptionSelected={isOptionSelected}
              psiObject={psiObject}
              pm25Data={pm25Data}
              uvIndex={uvIndex}
              weather2HrForecast={weather2HrForecast}
              handlerSelectedRegionForecast={handlerSelectedRegionForecast}
              dryTemperatureData={dryTemperatureData}
              humidityData={humidityData}
            />
          }
        >
          <Route
            path="psi"
            element={
              <PsiNeaContainer
                selectRegion={selectRegion}
                psiObject={psiObject}
                region={region}
              />
            }
          />
          <Route
            path="pm25"
            element={<Pm25NeaContainer pm25Data={pm25Data} />}
          />
          <Route
            path="weather2hr"
            element={
              <Weather2HrsContainer
                selectedRegionForecast={weather2HrSelectedRegionForcast}
              />
            }
          />
          <Route path="wetbulb" element={<WetbulbTempContainer />} />
          <Route path="uv" element={<UvNeaContainer />} />
        </Route>
        <Route path="watchlist" element={<WatchList watchList={watchList} />} />
        <Route path="about" element={<About watchList={watchList} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
