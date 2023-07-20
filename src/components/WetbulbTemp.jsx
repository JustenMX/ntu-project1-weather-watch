/* eslint-disable react/prop-types */
// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
// components
import Button from "./Button";

const WetbulbTemp = ({ dryTemperatureData, humidityData }) => {
  const [wetbulbTemp, setWetbulbTemp] = useState(null);
  const [dryTemp, setDryTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    if (
      dryTemperatureData &&
      dryTemperatureData.items &&
      dryTemperatureData.items.length > 0
    ) {
      const readings = dryTemperatureData.items[0].readings;
      setDryTemp(
        readings.reduce((acc, curr) => acc + curr.value, 0) / readings.length
      );
    }

    if (humidityData && humidityData.items && humidityData.items.length > 0) {
      const readings = humidityData.items[0].readings;
      setHumidity(
        readings.reduce((acc, curr) => acc + curr.value, 0) / readings.length
      );
    }
  }, [dryTemperatureData, humidityData]);

  const calculateWetBulbTemperature = (dryTemp, humidity) => {
    const wetBulbTemp =
      dryTemp * Math.atan(0.151977 * Math.sqrt(humidity + 8.313659)) +
      Math.atan(dryTemp + humidity) -
      Math.atan(humidity - 1.676331) +
      0.00391838 * Math.pow(humidity, 1.5) * Math.atan(0.023101 * humidity) -
      4.686035;
    return wetBulbTemp.toFixed(2);
  };

  useEffect(() => {
    if (dryTemp && humidity) {
      setWetbulbTemp(calculateWetBulbTemperature(dryTemp, humidity));
    }
  }, [dryTemp, humidity]);

  console.log("Average dryTemp:", dryTemp);
  console.log("Average humidity:", humidity);
  console.log("Wetbulb temperature:", wetbulbTemp);

  // Helper function to decide the heat category
  const decideHeatCategory = (wetbulbTemp) => {
    if (wetbulbTemp <= 29.9) return { category: "White", work: 60, rest: 15 };
    if (wetbulbTemp >= 30 && wetbulbTemp <= 30.9)
      return { category: "Green", work: 45, rest: 15 };
    if (wetbulbTemp >= 31 && wetbulbTemp <= 31.9)
      return { category: "Yellow", work: 30, rest: 15 };
    if (wetbulbTemp >= 32 && wetbulbTemp <= 32.9)
      return { category: "Red", work: 30, rest: 30 };
    if (wetbulbTemp >= 33) return { category: "Black", work: 30, rest: 30 };
  };

  const heatCategory = wetbulbTemp ? decideHeatCategory(wetbulbTemp) : null;

  // Background color change
  const colourMatrixWetBulb = (wetbulbTemp) => {
    if (wetbulbTemp >= 32) {
      return "bg-red-300";
    } else if (wetbulbTemp >= 31) {
      return "bg-yellow-300";
    } else {
      return "bg-green-300"; //Note as it defaults to white you won't see the difference, change the color to bg-red-500 to see if it works
    }
  };

  const bgColor = wetbulbTemp
    ? colourMatrixWetBulb(wetbulbTemp)
    : "bg-green-300";

  return (
    <>
      <div
        className={`max-w-sm ${bgColor} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
            WETBULB TEMP READINGS
          </h5>
          <table className="table-auto bg-white w-full text-left border-separate border-2 border-black">
            <tbody>
              <tr>
                <th className="border-2 border-black px-4 py-2">
                  Air Temp (°C)
                </th>
                <td className="border-2 border-black px-4 py-2">
                  {dryTemp ? dryTemp.toFixed(2) : "Loading..."}
                </td>
              </tr>
              <tr>
                <th className="border-2 border-black px-4 py-2">
                  Humidity (%)
                </th>
                <td className="border-2 border-black px-4 py-2">
                  {humidity ? humidity.toFixed(2) : "Loading..."}
                </td>
              </tr>
              <tr>
                <th className="border-2 border-black px-4 py-2">
                  Wetbulb Temp (°C)
                </th>
                <td className="border-2 border-black px-4 py-2">
                  {wetbulbTemp ? wetbulbTemp : "Loading..."}
                </td>
              </tr>
              <tr>
                <th className="border-2 border-black px-4 py-2">
                  Heat Category
                </th>
                <td className="border-2 border-black px-4 py-2">
                  {heatCategory ? heatCategory.category : "Loading..."}
                </td>
              </tr>
              <tr>
                <th className="border-2 border-black px-4 py-2">
                  Work : Rest (Min)
                </th>
                <td className="border-2 border-black px-4 py-2">
                  {heatCategory
                    ? `${heatCategory.work} : ${heatCategory.rest}`
                    : "Loading..."}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="font-light text-xs my-2">Based on National Average</p>
          <Button
            className="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
};

export default WetbulbTemp;
