// css
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// dependencies
import { useState,useEffect } from "react";
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
 
import neaAPI from './api/neaAPI';  

function App() {
  // state management
  const [region, setRegion] = useState(regionalData);
  const [selectRegion, setSelectRegion] = useState("");
  const [watchList, setWatchList] = useState([]);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

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
  //psi
  const [psiObject, setPsiObject] = useState([]); 

  const apiGetPsi = async () => {
    try { 
      console.log("App.jsx > apiGetPsi");
      const response = await neaAPI.get(`/psi`); 
      setPsiObject(response.data.items[0]['readings']['psi_twenty_four_hourly']);
 
    }catch (error) {
      console.log(error.message);
    } 
  } 
  useEffect(() => {
    apiGetPsi();
  }, [])

  // debug
  console.log(region);
  console.log(selectRegion);
  console.log(watchList);

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
            />
          }
        >
          <Route path="psi" element={<PsiNeaContainer selectRegion={selectRegion} psiObject={psiObject}/>} />
          <Route path="pm25" element={<Pm25NeaContainer />} />
          <Route path="weather2hr" element={<Weather2HrsContainer />} />
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