/* eslint-disable react/prop-types */
// dependencies
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
// components
import NavSideBar from "../components/NavSideBar";
import WatchListContainer from "../components/WatchListContainer";
// data
import neaAPI from "../api/neaAPI";
import { useEffect } from "react";

function WatchList(props) {
  const { watchListRegion, region, ToastContainer } = props;
  //////////////////////////////
  // State Management
  //////////////////////////////
  const [watchList, setWatchList] = useState([]);
  const [watchPsi, setWatchPsi] = useState([]);
  const [watchPM25, setWatchPM25] = useState([]);
  const [watchUVIndex, setWatchUVIndex] = useState([]);
  const [watchWeather, setWatchWeather] = useState([]);
  const [watchAirTemp, setWatchAirTemp] = useState([]);
  const [watchHumidity, setWatchHumidity] = useState([]);
  const [watchWetBulb, setWatchWetBulb] = useState();

  //////////////////////////////
  // GET ALL API
  //////////////////////////////

  useEffect(() => {
    const getWeatherReadings = async () => {
      try {
        const [
          response1,
          response2,
          response3,
          response4,
          response5,
          response6,
        ] = await Promise.all([
          neaAPI.get(`/psi`),
          neaAPI.get(`/pm25`),
          neaAPI.get(`/uv-index`),
          neaAPI.get(`/24-hour-weather-forecast`),
          neaAPI.get(`/air-temperature`),
          neaAPI.get(`/relative-humidity`),
        ]);
        setWatchPsi(response1.data);
        setWatchPM25(response2.data);
        setWatchUVIndex(response3.data);
        setWatchWeather(response4.data);
        setWatchAirTemp(response5.data);
        setWatchHumidity(response6.data);
        toast.promise("loading");
      } catch (error) {
        toast.error(error);
      }
    };
    getWeatherReadings();
  }, []);

  //////////////////////////////
  // Handlers
  // handlePsi()
  // handlePM25()
  //////////////////////////////
  // explaination provided below (only applies for handlePsi(), as once the watchList is updated, for subsequent handling I use the updated state)
  //////////////////////////////
  // region (state) passed as prop from App.jsx -> contains the data from regionalData.js
  // watchListRegion (state) passed as props from App.jsx is an array of objects containing all regions selected by the user to be in watchList
  // watchPsi (state), containing data from getPSI() api request and I store the entire response data
  // source of truth would be (WatchListRegion) as it contains all the regions / locations that the user has added and I need this to run the match
  // Primary Logic handling -> watchListRegion.region to check with region.name -> and if the watchListRegion.region matches with region.name, i want to get the respective regions from (state) region (region.label_location.region)
  // store the location and region in a new object and hold them in a temporary array (array of objects)
  // Secondary Logic handling -> once matched, to use that matched values (stored in an temp array of objects) and check against watchPsi. I need to match the region --> which the region in my api response, but the api response which contains the values is a object, whereas the value i want to match with is a single string, threfore i need to run a object loop in line 68 then run a match vice versa. if matched i create a new object, update the values, and update the state with the object variable. Take note that all this is being handled for every loop iteration.
  //////////////////////////////

  useEffect(() => {
    //////////////////////////////
    // handlePsi();
    //////////////////////////////
    const handlePsi = () => {
      let matchedRegions = [];
      // execute for loop to the WatchListRegion array
      for (let i = 0; i < watchListRegion.length; i++) {
        // execute for loop to the Region array
        for (let j = 0; j < region.length; j++) {
          if (watchListRegion[i].region === region[j]?.name) {
            // if match create new object and push the values
            const newWatchList = {
              uid: uuidv4(),
              location: watchListRegion[i].region,
              region: region[j].label_location.region,
            };
            // if matched, push into new array
            matchedRegions.push(newWatchList);
          }
        }
      }
      console.log("matchedRegions");
      console.log(matchedRegions);

      // execute another for loop with matchedRegions
      for (let k = 0; k < matchedRegions.length; k++) {
        // pass the readings which is a object to a variable
        const psiValue = watchPsi?.items?.[0]?.readings?.psi_twenty_four_hourly;
        console.log("psiValue");
        console.log(psiValue);
        for (const region in psiValue) {
          if (matchedRegions[k].region === region) {
            const newWatchList = {
              ...matchedRegions[k],
              psi: psiValue[region],
            };
            // update state with the new object every iteration of [matchedRegions]
            setWatchList((prevState) => [...prevState, newWatchList]);
          }
        }
      }
    };

    //////////////////////////////
    // handlePM25();
    //////////////////////////////
    const handlePM25 = () => {
      setWatchList((prevState) => {
        const updatedWatchList = prevState.map((item) => {
          const pm25Value = watchPM25?.items?.[0]?.readings?.pm25_one_hourly;
          for (const regionKey in pm25Value) {
            if (item.region === regionKey) {
              return {
                ...item,
                pm25: pm25Value[regionKey],
              };
            }
          }
          // If no matching regionKey found, return the item
          return item;
        });
        return updatedWatchList;
      });
    };

    //////////////////////////////
    // handleUVIndex()
    //////////////////////////////
    const handleUVIndex = () => {
      setWatchList((prevState) => {
        const updatedWatchList = prevState.map((item) => {
          const uvIndexValue = watchUVIndex?.items?.[0]?.index[0]?.value;
          return {
            ...item,
            uvIndex: uvIndexValue,
          };
        });
        return updatedWatchList;
      });
    };

    //////////////////////////////
    // handleWeather()
    //////////////////////////////
    const handleWeather = () => {
      setWatchList((prevState) => {
        const updatedWatchList = prevState.map((item) => {
          const weatherValue = watchWeather?.items?.[0]?.periods[0]?.regions;
          for (const regionKey in weatherValue) {
            if (item.region === regionKey) {
              return {
                ...item,
                weather: weatherValue[regionKey],
              };
            }
          }
          return item;
        });
        return updatedWatchList;
      });
    };

    //////////////////////////////
    // handleWetBulbTemperature()
    //////////////////////////////
    // two states (watchAirTemp && watchHumidity) hold the api response data
    // obtain the average Air Temperature && Relative Humidty and push it to a new state as an object
    // using the average values, to run the calcualtions to get the wetblub temperature and push new values to watchWetBulb
    //////////////////////////////
    const handleWetBulbTemperature = () => {
      const airTempArr = watchAirTemp?.items?.[0]?.readings;
      const humidityArr = watchHumidity?.items?.[0]?.readings;

      if (airTempArr && humidityArr) {
        // get average air temperature
        const avgTemp =
          airTempArr.reduce(
            (accumulator, currentValue) => accumulator + currentValue.value,
            0
          ) / airTempArr.length;
        // get average humidity
        const avgHumidity = humidityArr.reduce(
          (accumulator, currentValue) => accumulator + currentValue.value,
          0
        );
        // get wetbulb temperature
        const wetBulbTemperature =
          avgTemp *
            Math.atan(
              0.151977 *
                Math.pow(
                  (Math.exp((17.27 * avgHumidity) / (237.7 + avgHumidity)) +
                    8.313659) /
                    100,
                  0.5
                )
            ) +
          Math.atan(avgTemp + avgHumidity * 0.1) -
          Math.atan(avgHumidity * 0.1 - 1.676331) +
          0.00391838 *
            Math.pow(avgHumidity * 0.1, 1.5) *
            Math.atan(0.023101 * (avgHumidity * 0.1)) -
          4.686035;

        setWatchWetBulb({
          avgTemp: Math.round(avgTemp * 100) / 100,
          avgHumidity: Math.round(avgHumidity * 100) / 100,
          wetBulbTemperature: Math.round(wetBulbTemperature * 100) / 100,
        });
      }
    };

    //////////////////////////////
    // handleColorCode
    //////////////////////////////
    // At this stage the states are already updated with the relevent data
    // to apply color code matrix to all the readings in both states ()
    //////////////////////////////

    //////////////////////////////
    // function calls
    //////////////////////////////
    handlePsi();
    handlePM25();
    handleUVIndex();
    handleWeather();
    handleWetBulbTemperature();
    //////////////////////////////
    // useEffect dependecies
    //////////////////////////////
  }, [
    region,
    watchListRegion,
    watchPsi,
    watchPM25,
    watchUVIndex,
    watchWeather,
    watchAirTemp,
    watchHumidity,
  ]);

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
  console.log("watchAirTemp");
  console.log(watchAirTemp);
  console.log("watchHumidity");
  console.log(watchHumidity);
  console.log("watchWetBulb");
  console.log(watchWetBulb);
  console.log("WatchList");
  console.log(watchList);

  /////////////
  // Colour Matrix
  /////////////
  const colourMatrixPsi = (psi) => {
    if (psi > 300) {
      return "bg-red-500";
    } else if (psi > 200 && psi <= 300) {
      return "bg-orange-500";
    } else if (psi > 100 && psi <= 200) {
      return "bg-yellow-500";
    } else if (psi > 50 && psi <= 100) {
      return "bg-blue-500";
    } else if (psi > 0 && psi <= 55) {
      return "bg-green-500";
    } else {
      return "bg-white";
    }
  };

  const colourMatrixPm25 = (pm25) => {
    if (pm25 > 250) {
      return "bg-red-500";
    } else if (pm25 > 150 && pm25 <= 250) {
      return "bg-yellow-500";
    } else if (pm25 > 55 && pm25 <= 150) {
      return "bg-blue-500";
    } else if (pm25 > 0 && pm25 <= 55) {
      return "bg-green-500";
    } else {
      return "bg-white";
    }
  };

  const colourMatrixUvIndex = (uvIndex) => {
    if (uvIndex > 11) {
      return "bg-red=500";
    } else if (uvIndex > 7 && uvIndex <= 10) {
      return "bg-orange-500";
    } else if (uvIndex > 5 && uvIndex <= 7) {
      return "bg-yellow-500";
    } else if (uvIndex > 2 && uvIndex <= 5) {
      return "bg-blue-500";
    } else if (uvIndex > 0 && uvIndex <= 2) {
      return "bg-green-500";
    } else {
      return "bg-white";
    }
  };

  const colourMatrixWetBulb = (wetBulbTemperature) => {
    if (wetBulbTemperature > 32) {
      return "bg-red-500";
    } else if (wetBulbTemperature > 30 && wetBulbTemperature <= 31.9) {
      return "bg-yellow-500";
    } else if (wetBulbTemperature < 31) {
      return "bg-green-500";
    } else {
      return "bg-white";
    }
  };

  return (
    <div>
      <NavSideBar watchListRegion={watchListRegion} />
      <div className="p-4 sm:ml-64">
        <ToastContainer />
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl">WatchList</h1>
          {/* map begins here */}

          {watchList.map((watchItem, uuid) => (
            <div
              key={uuid}
              className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 my-5"
            >
              <div className="bg-blue-700 px-4 py-3 text-white rounded-lg">
                <p className="text-center text-lg font-semibold">
                  {watchItem.location}
                </p>
              </div>
              <div className="grid grid-cols-5 gap-4 my-4">
                <WatchListContainer
                  watchListText="Today's air quality"
                  watchListValue={watchItem.psi}
                  watchListLabel="24-hr PSI"
                  bgColour={colourMatrixPsi(watchItem.psi)}
                />

                <WatchListContainer
                  watchListText="Today's air quality"
                  watchListValue={watchItem.pm25}
                  watchListLabel="1-hr PM2.5 (µg/m³)"
                  bgColour={colourMatrixPm25(watchItem.pm25)}
                />

                <WatchListContainer
                  watchListValue={watchItem.weather}
                  watchListLabel="24-hr weather forecast"
                />

                <WatchListContainer
                  watchListValue={watchWetBulb.wetBulbTemperature}
                  watchListLabel="Wetbulb Temperature"
                  bgColour={colourMatrixWetBulb(
                    watchWetBulb.wetBulbTemperature
                  )}
                />
                <WatchListContainer
                  watchListValue={watchItem.uvIndex}
                  watchListLabel="Ultraviolet Index"
                  bgColour={colourMatrixUvIndex(watchItem.uvIndex)}
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
