// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

// data
import weatherIcons from "../data/weathericons";

// Add the weather-icons CSS classes
import "weather-icons/css/weather-icons.min.css";

// components
import Button from "./Button";

function Weather2Hrs({
  weather2HrForecast,
  selectedRegion,
  handlerSelectedRegionForecast,
}) {
  console.log("Selected Region:", selectedRegion);
  const selectedRegionForecast = weather2HrForecast.find(
    (forecast) => forecast.area === selectedRegion
  ); // weather2HrForecast here is API "forecasts" array

  // call the callback function to pass forecast value back to App.jsx
  useEffect(() => {
    handlerSelectedRegionForecast(
      selectedRegionForecast ? selectedRegionForecast.forecast : ""
    );
  }, [selectedRegionForecast]);

  // find the weather icon element in the weatherIcons array for the selectedRegionForecast
  const matchWeatherIcon = weatherIcons.find(
    (weather) =>
      weather.weather ===
      (selectedRegionForecast ? selectedRegionForecast.forecast : "")
  );

  // Get the icon class name, or use "wi-na" or N/A as the default icon when no match is found
  const iconClassName = matchWeatherIcon ? matchWeatherIcon.icon : "wi-na";

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center justify-center p-4 bg-yellow-100 h-60 rounded-t-lg">
          <i className={`${iconClassName} text-9xl rounded-t-lg`} />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              2-HR WEATHER CONDITION
            </h5>
          </a>
          <p className="mb-3 text-6xl font-bold font-mono text-gray-800 dark:text-gray-400 text-center bg-yellow-200">
            {selectedRegionForecast ? selectedRegionForecast.forecast : ""}
          </p>
          <Button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            buttonLabel={[
              "Read More",
              <FontAwesomeIcon
                icon={faArrowRight}
                key="faArrowRight"
                className="ml-2"
              />,
            ]}
            path="weather2hr"
          />
        </div>
      </div>
    </>
  );
}

export default Weather2Hrs;
