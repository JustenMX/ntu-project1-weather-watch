// data
import neaAPI from "../api/neaAPI";
// dependencies
import { useEffect, useState } from "react";

function Pm25NeaContainer() {
  // state to hold data
  const [pm25Data, setPm25Data] = useState([]);

  useEffect(() => {
    const fetchPm25Data = async () => {
      try {
        const response = await neaAPI.get("/");
        const data = response.data.items[0]?.readings?.pm25_one_hourly;
        const sortedData = Object.entries(data).sort(([a], [b]) =>
          a.localeCompare(b)
        );
        setPm25Data(sortedData);
      } catch (error) {
        console.log("Error fetching PM2.5 data:", error);
      }
    };

    fetchPm25Data();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            PM 2.5 Readings
          </h5>
          {pm25Data.map(([region, value]) => (
            <p
              key={region}
              className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            >
              {region}: {value} µg/m³
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pm25NeaContainer;
