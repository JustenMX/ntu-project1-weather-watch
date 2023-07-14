// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// components
import Button from "./Button";
import { useState, useEffect } from "react";

import neaAPI from "../api/neaAPI";
import regionalData from "../data/regionalData";

function Pm25Nea() {
  const [pm25Data, setPm25Data] = useState(null); // State to hold the API data
  const [selectedLocation, setSelectedLocation] = useState(null); // State to hold the selected location

  useEffect(() => {
    // Fetch API data when the component mounts
    neaAPI
      .get()
      .then((response) => {
        setPm25Data(response.data.items[0].readings.pm25_one_hourly); // Store the PM2.5 data in the state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleLocationChange = (event) => {
    const selectedLocationName = event.target.value;
    const selectedLocationData = regionalData.find(
      (location) => location.name === selectedLocationName
    );
    setSelectedLocation(selectedLocationData);
  };

  let filteredPm25Data = null;
  if (pm25Data && selectedLocation) {
    const region = selectedLocation.label_location.region;
    filteredPm25Data = pm25Data[region];
  }

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://images.pexels.com/photos/7532428/pexels-photo-7532428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              PM2.5 READINGS
            </h5>
          </a>
          {filteredPm25Data ? (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {selectedLocation.label_location.region}: {filteredPm25Data}μg/m³
            </p>
          ) : (
            <p>No PM2.5 data available for the selected location.</p>
          )}
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
            path="pm25"
          />
        </div>
      </div>
    </>
  );
}

export default Pm25Nea;
