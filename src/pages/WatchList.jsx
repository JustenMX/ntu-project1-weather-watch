/* eslint-disable react/prop-types */
//dependencies
import { useState } from "react";
import { toast } from "react-toastify";
// components
import NavSideBar from "../components/NavSideBar";
import WatchListContainer from "../components/WatchListContainer";
// data
import neaAPI from "../api/neaAPI";
import { useEffect } from "react";

function WatchList(props) {
  const { watchListRegion, region, ToastContainer } = props;
  // State Management
  const [watchList, setWatchList] = useState([]);
  const [watchPsi, setWatchPsi] = useState([]);
  const [watchPM25, setWatchPM25] = useState([]);
  const [watchUVIndex, setWatchUVIndex] = useState([]);
  const [watchWeather, setWatchWeather] = useState([]);

  /////////////
  // API
  // getPSI()
  // getPM25()
  /////////////

  useEffect(() => {
    /////////////
    // GET PSI
    /////////////
    const getWeatherReadings = async () => {
      try {
        const [response1, response2, response3, response4] = await Promise.all([
          neaAPI.get(`/psi`),
          neaAPI.get(`/pm25`),
          neaAPI.get(`/uv-index`),
          neaAPI.get(`/24-hour-weather-forecast`),
        ]);
        setWatchPsi(response1.data);
        setWatchPM25(response2.data);
        setWatchUVIndex(response3.data);
        setWatchWeather(response4.data);
        toast.promise("loading");
      } catch (error) {
        toast.error(error);
      }
    };
    getWeatherReadings();
  }, []);

  /////////////
  // Handlers
  // handlePsi()
  // handlePM25()
  /////////////
  // explaination provided below (only applies for handlePsi(), as once the watchList is updated, for subsequent handling I use the updated state)
  /////////////
  // region (state) passed as prop from App.jsx -> contains the data from regionalData.js
  // watchListRegion (state) passed as props from App.jsx is an array of objects containing all regions selected by the user to be in watchList
  // watchPsi (state), containing data from getPSI() api request and I store the entire response data
  // source of truth would be (WatchListRegion) as it contains all the regions / locations that the user has added and I need this to run the match
  // Primary Logic handling -> watchListRegion.region to check with region.name -> and if the watchListRegion.region matches with region.name, i want to get the respective regions from (state) region (region.label_location.region)
  // store the location and region in a new object and hold them in a temporary array (array of objects)
  // Secondary Logic handling -> once matched, to use that matched values (stored in an temp array of objects) and check against watchPsi. I need to match the region --> which the region in my api response, but the api response which contains the values is a object, whereas the value i want to match with is a single string, threfore i need to run a object loop in line 68 then run a match vice versa. if matched i create a new object, update the values, and update the state with the object variable. Take note that all this is being handled for every loop iteration.
  /////////////

  useEffect(() => {
    /////////////
    // handlePsi()
    /////////////
    const handlePsi = () => {
      let matchedRegions = [];
      // execute for loop to the WatchListRegion array
      for (let i = 0; i < watchListRegion.length; i++) {
        // execute for loop to the Region array
        for (let j = 0; j < region.length; j++) {
          if (watchListRegion[i].region === region[j]?.name) {
            // if match create new object and push the values
            const newWatchList = {
              location: watchListRegion[i].region,
              region: region[j].label_location.region,
            };
            // if matched, push into new array
            matchedRegions.push(newWatchList);
          }
        }
      }
      // execute another for loop with matchedRegions
      for (let k = 0; k < matchedRegions.length; k++) {
        // pass the readings which is a object to a variable
        const psiValue = watchPsi?.items?.[0]?.readings?.psi_twenty_four_hourly;
        for (const regionKey in psiValue) {
          if (matchedRegions[k].region === regionKey) {
            const newWatchList = {
              location: matchedRegions[k].location,
              region: matchedRegions[k].region,
              psi: psiValue[regionKey],
            };
            // update state with the new object every iteration of [matchedRegions]
            setWatchList((prevState) => [...prevState, newWatchList]);
          }
        }
      }
    };

    /////////////
    // handlePM25()
    /////////////
    const handlePM25 = () => {
      const updatedWatchList = [];
      for (let i = 0; i < watchList.length; i++) {
        const pm25Value = watchPM25?.items?.[0]?.readings?.pm25_one_hourly;
        for (const regionKey in pm25Value) {
          if (watchList[i].region === regionKey) {
            const newWatchList = {
              ...watchList[i],
              pm25: pm25Value[regionKey],
            };
            // push all the updated values in an array first
            updatedWatchList.push(newWatchList);
          }
        }
      }
      // override the state with the new array
      setWatchList(updatedWatchList);
    };

    /////////////
    // handleUVIndex()
    /////////////
    // const handleUVIndex = () => {
    //   const uvIndexValue = watchUVIndex?.items?.[0]?.index[0]?.value;
    //   const updatedWatchList = watchList.map((item) => ({
    //     ...item,
    //     uvIndex: uvIndexValue,
    //   }));
    //   setWatchList(updatedWatchList);
    // };

    /////////////
    // handleWeather()
    /////////////
    // const handleWeather = () => {
    //   let updatedWatchList = [];
    //   for (let i = 0; i < watchList.length; i++) {
    //     const weatherForecast = watchWeather?.items?.[0]?.periods[0]?.regions;
    //     for (const regionKey in weatherForecast) {
    //       if (watchList[i].region === regionKey) {
    //         const newWatchList = {
    //           ...watchList[i],
    //           weatherRegion: weatherForecast[regionKey],
    //         };
    //         updatedWatchList.push(newWatchList);
    //       }
    //     }
    //   }
    //   setWatchList(updatedWatchList);
    // };
    handlePsi();
    handlePM25();

    // handleUVIndex();
    // handleWeather();
  }, [watchListRegion, region, watchPsi, watchPM25]);

  /////////////
  // debug
  /////////////
  console.log("psi");
  console.log(watchPsi);
  console.log("pm25");
  console.log(watchPM25);
  console.log("uv");
  console.log(watchUVIndex);
  console.log("weather");
  console.log(watchWeather);
  console.log("WatchList");
  console.log(watchList);

  return (
    <div>
      <NavSideBar watchListRegion={watchListRegion} />
      <div className="p-4 sm:ml-64">
        <ToastContainer />
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl">WatchList</h1>
          {/* map begins here */}

          {watchListRegion.map((watchItem, i) => (
            <div
              key={i}
              className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 my-5"
            >
              <div className="bg-blue-700 px-4 py-3 text-white rounded-lg">
                <p className="text-center text-lg font-semibold">
                  {watchItem.region}
                </p>
              </div>
              <div className="grid grid-cols-5 gap-4 my-4">
                <WatchListContainer
                  watchListValue="0"
                  watchListLabel="24-hr PSI"
                />
                <WatchListContainer
                  watchListValue="0"
                  watchListLabel="1-hr PM2.5 (µg/m³)"
                />
                <WatchListContainer
                  watchListValue="0"
                  watchListLabel="24-hr weather forecast"
                />
                <WatchListContainer
                  watchListValue="0"
                  watchListLabel="wetbulb temperature"
                />
                <WatchListContainer
                  watchListValue="0"
                  watchListLabel="Ultraviolet Index"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchList;
