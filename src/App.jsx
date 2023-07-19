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
import WetbulbTempController from "./components/WetbulbTempContainer";
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
  const [dryTemp, setDryTemp] = useState([]);
  const [humidity, setHumidity] = useState([]);

  //////////////////////////////
  // GET ALL API
  //////////////////////////////

  const apiGetPsi = async () => {
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

  const fetchUvIndex = async () => {
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

  // Fetch weather forecast data
  const fetchWeather2HrForecast = async () => {
    try {
      const response = await neaAPI.get(`/2-hour-weather-forecast`);
      const { forecasts } = response.data.items[0]; // forecasts here = response.data.item[0].forecasts
      console.log(forecasts);
      setWeather2HrForecast(forecasts); // update state with latest item[0].forecasts array
    } catch (error) {
      console.error("Error fetching weather forecast:", error);
    }
  };

  const fetchDryTemp = async () => {
    try {
      const response = await neaAPI.get(`/air-temperature`);
      setDryTemp(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchHumidity = async () => {
    try {
      const response = await neaAPI.get(`/relative-humidity`);
      setHumidity(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    apiGetPsi();
    fetchPm25Data();
    fetchUvIndex();
    fetchWeather2HrForecast();
    fetchDryTemp();
    fetchHumidity();
  }, [selectRegion]);

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
  console.log("pm25Data App.jsx");
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
              dryTemp={dryTemp}
              humidity={humidity}
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
          <Route path="wetbulb" element={<WetbulbTempController />} />
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
