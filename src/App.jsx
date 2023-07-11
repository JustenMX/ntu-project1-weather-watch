// css
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// dependencies
import { useState } from "react";
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

function App() {
  // state management
  const [region, setRegion] = useState(regionalData);
  const [selectRegion, setSelectRegion] = useState("");
  const [watchList, setWatchList] = useState([{}]);

  // handler Selected Option
  const handlerSelectOption = (value) => {
    setSelectRegion(value);
  };

  //handler to Add WatchList
  const handlerAddWatchList = () => {
    const newWatchList = {
      region: selectRegion,
    };
    // check if the same region is already in the watchlist
    const checkDuplicates = watchList.some(
      (watchItem) => watchItem.region === selectRegion
    );
    if (checkDuplicates) {
      toast.error("You already have this region in your watch list");
    } else {
      setWatchList((prevState) => [...prevState, newWatchList]);
      toast.success(`You have added ${selectRegion} to your watch list`);
    }
  };

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
              handlerSelectOption={handlerSelectOption}
              handlerAddWatchList={handlerAddWatchList}
              ToastContainer={ToastContainer}
            />
          }
        >
          <Route path="psi" element={<PsiNeaContainer />} />
          <Route path="pm25" element={<Pm25NeaContainer />} />
          <Route path="weather2hr" element={<Weather2HrsContainer />} />
          <Route path="wetbulb" element={<WetbulbTempController />} />
          <Route path="uv" element={<UvNeaContainer />} />
        </Route>
        <Route path="watchlist" element={<WatchList watchList={watchList} />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
