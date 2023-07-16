//WetbulbTemp.jsx
// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

// components
import Button from "./Button";

function WetbulbTemp({ dryTemp, humidity, wetBulbTemp, selectedStationId }) {
  // Function to get color based on the wet bulb temp
  const getColor = (temp) => {
    if (temp < 31) {
      return '#00FF00'; // green
    } else if (temp >= 31 && temp <= 31.9) {
      return '#FFFF00'; // yellow
    } else {
      return '#FF0000'; // red
    }
  }

  const color = wetBulbTemp && wetBulbTemp[selectedStationId] ? getColor(wetBulbTemp[selectedStationId]) : '#FFFFFF'; // white if wetBulbTemp doesn't exist

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div style={{ 
          backgroundColor: color, 
          height: '200px', 
          width: '100%', 
          borderRadius: '25px 25px 0 0'
        }}/>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              WETBULB TEMP READINGS
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <p>Dry Temp: {dryTemp && dryTemp[selectedStationId]}</p>
            <p>Humidity: {humidity && humidity[selectedStationId]}</p>
            <p>Wet Bulb Temp: {wetBulbTemp && wetBulbTemp[selectedStationId]}</p>
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
            path="wetbulb"
          />
        </div>
      </div>
    </>
  );
}

export default WetbulbTemp;