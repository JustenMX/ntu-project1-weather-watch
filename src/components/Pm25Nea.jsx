// data
import neaAPI from "../api/neaAPI";
// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
// components
import Button from "./Button";

function Pm25Nea({ selectRegion }) {
  // state to hold data
  const [pm25Data, setPm25Data] = useState({});

  useEffect(() => {
    const fetchPm25Data = async () => {
      try {
        const response = await neaAPI.get("/");
        const data = response.data.items[0]?.readings?.pm25_one_hourly;
        setPm25Data(data);
      } catch (error) {
        console.log("Error fetching PM2.5 data:", error);
      }
    };

    fetchPm25Data();
  }, []);

  const selectedReading = pm25Data[selectRegion];

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
          {selectedReading ? (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Reading: {selectedReading} µg/m³
            </p>
          ) : (
            <p>No data found.</p>
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
