// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
// components
import Button from "./Button";
// data
import neaAPI from '../api/neaAPI';

function WetbulbTemp() {
  const [dryTemp, setDryTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [wetbulbTemp, setWetbulbTemp] = useState(null);

 // Stull Equation
 const calculateWetBulbTemperature = (dryTemp, humidity) => {
  const wetBulbTemp = dryTemp * Math.atan(0.151977 * Math.sqrt(humidity + 8.313659)) + Math.atan(dryTemp + humidity) - Math.atan(humidity - 1.676331) + 0.00391838 * Math.pow(humidity, 1.5) * Math.atan(0.023101 * humidity) - 4.686035;
  return wetBulbTemp.toFixed(2);
}

  useEffect(() => {
    const calculateAverage = (data) => {
      const readings = data.items[0].readings;
      const sum = readings.reduce((accum, reading) => accum + reading.value, 0);
      return parseFloat((sum / readings.length).toFixed(2));
    }

    const fetchData = async () => {
      try {
        const [responseTemp, responseHumidity] = await Promise.all([
          neaAPI.get('/air-temperature'),
          neaAPI.get('/relative-humidity'),
        ]);
        const averageDryTemp = calculateAverage(responseTemp.data);
        const averageHumidity = calculateAverage(responseHumidity.data);
        setDryTemp(averageDryTemp);
        setHumidity(averageHumidity);
        setWetbulbTemp(calculateWetBulbTemperature(averageDryTemp, averageHumidity));
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log("Average dryTemp:", dryTemp);
  console.log("Average humidity:", humidity);
  console.log("Wetbulb temperature:", wetbulbTemp);
   
   // Helper function to decide the heat category
   const decideHeatCategory = (wetbulbTemp) => {
    if (wetbulbTemp <= 29.9) return { category: 'White', work: 60, rest: 15 };
    if (wetbulbTemp >= 30 && wetbulbTemp <= 30.9) return { category: 'Green', work: 45, rest: 15 };
    if (wetbulbTemp >= 31 && wetbulbTemp <= 31.9) return { category: 'Yellow', work: 30, rest: 15 };
    if (wetbulbTemp >= 32 && wetbulbTemp <= 32.9) return { category: 'Red', work: 30, rest: 30 };
    if (wetbulbTemp >= 33) return { category: 'Black', work: 30, rest: 30 };
  }

  const heatCategory = wetbulbTemp ? decideHeatCategory(wetbulbTemp) : null;


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
          <table className="table-auto w-full text-left border-separate border-2 border-gray-500">
          <tbody>
            <tr>
              <th className="border px-4 py-2">Air Temp (°C)</th>
              <td className="border px-4 py-2">{dryTemp ? dryTemp : 'Loading...'}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2">Humidity (%)</th>
              <td className="border px-4 py-2">{humidity ? humidity : 'Loading...'}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2">Wetbulb Temp (°C)</th>
              <td className="border px-4 py-2">{wetbulbTemp ? wetbulbTemp : 'Loading...'}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2">Heat Category</th>
              <td className="border px-4 py-2">{heatCategory ? heatCategory.category : 'Loading...'}</td>
            </tr>
            <tr>
              <th className="border px-4 py-2">Work : Rest (Min)</th>
              <td className="border px-4 py-2">{heatCategory ? `${heatCategory.work} : ${heatCategory.rest}` : 'Loading...'}</td>
            </tr>
          </tbody>
        </table>
        <p>Based on National Average</p>
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
}

export default WetbulbTemp;
