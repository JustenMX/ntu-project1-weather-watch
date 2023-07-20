// css
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// dependencies
import { useEffect, useState } from "react";
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
import WetbulbTemp from "./components/WetbulbTemp";
// data
import regionalData from "./data/regionalData";
import neaAPI from "./api/neaAPI";

function App() {
  // state management
  const [region, setRegion] = useState(regionalData);
  const [selectRegion, setSelectRegion] = useState("");
  const [watchListRegion, setWatchListRegion] = useState([]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [dryTemp, setDryTemp] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [dryTemperatureData, setDryTemperatureData] = useState(null);
  const [humidityData, setHumidityData] = useState(null);

  //API Call to fetch Air Temp and Humidity 
  // Fetching the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dryTempResponse = await neaAPI.get('/air-temperature');
        const humidityResponse = await neaAPI.get('/relative-humidity');
        setDryTemperatureData(dryTempResponse.data);
        setHumidityData(humidityResponse.data);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };
    fetchData();
  }, []);
  
  
  
  
  useEffect(() => {
    const calculateAverage = (data) => {
      const readings = data.items[0].readings;
      const sum = readings.reduce((accum, reading) => accum + reading.value, 0);
      return parseFloat((sum / readings.length).toFixed(2));
    }

    const fetchData = async () => {
      try {
        const [responseTemp, responseHumidity] = await Promise.all([
          neaAPI.get('/air-temperature'),
          neaAPI.get('/relative-humidity'),
        ]);
        const averageDryTemp = calculateAverage(responseTemp.data);
        const averageHumidity = calculateAverage(responseHumidity.data);
        setDryTemp(averageDryTemp);
        setHumidity(averageHumidity);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


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
  const handlerAddWatchListRegion = () => {
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
      const checkDuplicates = watchListRegion.some(
        (watchItem) => watchItem.region === selectRegion
      );
      if (checkDuplicates) {
        toast.error("You already have this location in your watch list");
      } else {
        setWatchListRegion((prevState) => [...prevState, newWatchList]);
        toast.success(`You have added ${selectRegion} to your watch list`);
      }
    }
  };



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
              handlerAddWatchListRegion={handlerAddWatchListRegion}
              ToastContainer={ToastContainer}
              watchListRegion={watchListRegion}
              isOptionSelected={isOptionSelected}
              dryTemperatureData={dryTemperatureData}
              humidityData={humidityData}
            />
          }
        >
          <Route path="psi" element={<PsiNeaContainer />} />
          <Route path="pm25" element={<Pm25NeaContainer />} />
          <Route path="weather2hr" element={<Weather2HrsContainer />} />
          <Route path="wetbulb" element={<WetbulbTempContainer />} />
          <Route path="uv" element={<UvNeaContainer />} />
          
        </Route>
        <Route
          path="watchlist"
          element={
            <WatchList
              watchListRegion={watchListRegion}
              region={region}
              ToastContainer={ToastContainer}
            />
          }
        />
        <Route
          path="about"
          element={<About watchListRegion={watchListRegion} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

