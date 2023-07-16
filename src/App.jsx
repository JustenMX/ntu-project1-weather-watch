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
import WetbulbTempController from "./components/WetbulbTempContainer";
import UvNeaContainer from "./components/UvNeaContainer";
import WetbulbTemp from "./components/WetbulbTemp";
// data
import regionalData from "./data/regionalData";
import neaAPI from "./api/neaAPI";

const getStationIdFromRegionName = (regionName) => {
  // Find the region data that matches the regionName
  const regionData = regionalData.find(region => region.name === regionName);

  // Return the station_id of the found region data
  return regionData?.label_location?.id;
};

function App() {
  // state management
  const [region, setRegion] = useState(regionalData);
  const [selectRegion, setSelectRegion] = useState("City"); // set initial state to "City"
  const [watchList, setWatchList] = useState([]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [dryTemp, setDryTemp] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [wetBulbTemp, setWetBulbTemp] = useState([]);

    // mapping and default region
    const stationToRegionMap = regionalData.reduce((map, region) => {
      map[region.label_location.id] = region.name;
      return map;
    }, {});
  
    const defaultRegion = "City"; // replace with your default value



// Get Dry Temp
const fetchDryTemp = async () => {
  try {
    const response = await neaAPI.get('/air-temperature');
    console.log(response.data);
    
    // Extract the readings array from the response data
    const readings = response.data.items[0].readings;
    const tempData = {};

    // Go through each reading and add to tempData object with station_id as key and value as the temperature reading
    for (let reading of readings) {
      tempData[reading.station_id] = reading.value;
    }
    console.log(tempData); // Log the temperature readings

    setDryTemp(tempData); // Assuming setDryTemp is a function to set state or similar
  } catch (error) {
    console.error('Error fetching Air Temp:', error);
  }
}

// Get Humidity
const fetchHumidity = async () => {
  try {
    const response = await neaAPI.get('/relative-humidity');
    console.log(response.data);

    // Extract the readings array from the response data
    const readings = response.data.items[0].readings;
    const humidityData = {};

    // Go through each reading and add to humidityData object with station_id as key and value as the humidity reading
    for (let reading of readings) {
      humidityData[reading.station_id] = reading.value;
    }
    console.log(humidityData); // Log the humidity readings

    setHumidity(humidityData); // Assuming setHumidity is a function to set state or similar
  } catch (error) {
    console.error('Error fetching Humidity:', error);
  }
}

useEffect(() => {
  if (dryTemp !== undefined && humidity !== undefined) {
    // Create an object to store the wet bulb temperature for each station
    const wetBulbTemps = {};

    // Loop over each station in the dryTemp object
    for (let stationId in dryTemp) {
      // Ensure that humidity is available for the current station
      if (humidity[stationId] !== undefined) {
        console.log(`Station: ${stationId}, DryTemp (Td): ${dryTemp[stationId]}, Humidity (RH): ${humidity[stationId]}`);
        const wetBulbTemp = calculateWetBulbTemperature(dryTemp[stationId], humidity[stationId]);
        console.log(`Wet Bulb Temperature: ${wetBulbTemp}`);
        wetBulbTemps[stationId] = wetBulbTemp;
      } else {
        console.log(`Station: ${stationId}, DryTemp (Td): ${dryTemp[stationId]}, Humidity (RH): unavailable`);
      }
    }
    setWetBulbTemp(wetBulbTemps); // Here you are setting wetBulbTemp
  }
}, [dryTemp, humidity]);


// Stull Equation
function calculateWetBulbTemperature(dryTemp, humidity) {
  const wetBulbTemp =
  dryTemp * Math.atan(0.151977 * Math.sqrt(humidity + 8.313659)) + Math.atan(dryTemp + humidity) - Math.atan(humidity - 1.676331) + 0.00391838 * Math.pow(humidity, 1.5) * Math.atan(0.023101 * humidity) - 4.686035;
  return parseFloat(wetBulbTemp.toFixed(2));
}


const selectedStationId = getStationIdFromRegionName(selectRegion);

console.log(`Station ID for selected region (${selectRegion}): ${selectedStationId}`);
console.log(`All Dry Temp: ${JSON.stringify(dryTemp)}`);
console.log(`Dry Temp for selected station: ${dryTemp[selectedStationId]}`);
console.log(`All Humidity: ${JSON.stringify(humidity)}`);
console.log(`Humidity for selected station: ${humidity[selectedStationId]}`);
console.log(`All WBGT: ${JSON.stringify(wetBulbTemp)}`);
console.log(`WBGT for selected station: ${wetBulbTemp[selectedStationId]}`);

<WetbulbTempController selectRegion={selectRegion} dryTemp={dryTemp[selectedStationId]} humidity={humidity[selectedStationId]} wetBulbTemp={wetBulbTemp[selectedStationId]} />

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

  // debug
  console.log(region);
  console.log(selectRegion);
  console.log(watchList);
  console.log(dryTemp);
  console.log(humidity)
  console.log(wetBulbTemp);

  useEffect(() => {
    fetchDryTemp();
  }, [] ) 

  useEffect(() => {
    fetchHumidity();
  }, [] ) 

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
            />
          }
        >
          <Route path="psi" element={<PsiNeaContainer />} />
          <Route path="pm25" element={<Pm25NeaContainer />} />
          <Route path="weather2hr" element={<Weather2HrsContainer />} />
          <Route path="wetbulb"  element={<WetbulbTempController 
              dryTemp={dryTemp[selectedStationId]}
              humidity={humidity[selectedStationId]}
              wetBulbTemp={wetBulbTemp[selectedStationId]}
              selectedRegion={selectRegion} 
            />}/>
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

