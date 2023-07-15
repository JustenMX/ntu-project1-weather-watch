// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

// components
import Button from "./Button";

// function calculateWetBulbTemperature(Td, RH) {
//   const arctan = Math.atan;
//   const sqrt = Math.sqrt;


//   const Tw =
//     Td * arctan(0.151977 * sqrt(RH + 8.313659)) + arctan(Td + RH) - arctan(RH - 1.676331) + 0.00391838 * Math.pow(RH, 1.5) * arctan(0.023101 * RH) - 4.686035;

//   return Tw;
// }

// function getTemperatureColor(Tw) {
//   if (Tw <= 29.9) {
//     return 'bg-white';
//   } else if (Tw <= 30.9) {
//     return 'bg-green-500';
//   } else if (Tw <= 31.9) {
//     return 'bg-yellow-500';
//   } else if (Tw <= 32.9) {
//     return 'bg-red-500';
//   } else {
//     return 'bg-black';
//   }
// }

function WetbulbTemp() {
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
              WETBULB TEMP READINGS
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
