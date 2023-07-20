/* eslint-disable react/prop-types */
// data
import weatherAdvisory from "../data/weatherAdvisory";
function Weather2HrsContainer({ selectedRegionForecast }) {
  // an object of weather advisories with weather conditions as properties

  // constant to display the object value or blank if no region is seleted.
  const displayWeatherAdvisory = weatherAdvisory[selectedRegionForecast] || "";

  return (
    <>
      <div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            WEATHER ADVISORY
          </h5>
          <p className="mb-3 text-3xl font-mono font-bold text-gray-900 dark:text-gray-400 bg-yellow-100">
            {displayWeatherAdvisory}
          </p>
        </div>
      </div>
    </>
  );
}

export default Weather2HrsContainer;
