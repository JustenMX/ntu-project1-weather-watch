// css
import "./index.css";
// dependencies
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// data

function App() {
  // state management
  const [userGeoLocation, setUserGeoLocation] = useState({});

  // Get users current geolocation
  const fetchUsersLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserGeoLocation((prevState) => ({
        ...prevState,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }));
    });
  };
  console.log(userGeoLocation);

  // Get users current geolocation upon load
  useEffect(() => {
    fetchUsersLocation();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="psi" element={<PsiNeaContainer />} />
          <Route path="pm25" element={<Pm25NeaContainer />} />
          <Route path="weather2hr" element={<Weather2HrsContainer />} />
          <Route path="wetbulb" element={<WetbulbTempController />} />
        </Route>
        <Route path="watchlist" element={<WatchList />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
