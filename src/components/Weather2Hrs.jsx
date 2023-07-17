// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { useState, useEffect } from "react";
// components
import Button from "./Button";
function Weather2Hrs({ weather2HrForecast, selectedRegion }) {
  console.log('Select Region:', selectedRegion);
  const selectedAreaForecast = weather2HrForecast.find((forecast) => forecast.area === selectedRegion); // weather2HrForecast here is API "forecasts" array

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <div>
            <h2>
              Weather Forecast: {selectedAreaForecast ? selectedAreaForecast.forecast : ""}
            </h2>
          </div>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              2HRS WEATHER READINGS
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             {selectedAreaForecast ? selectedAreaForecast.forecast : ""}
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
