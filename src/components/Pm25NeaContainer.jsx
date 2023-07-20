/* eslint-disable react/prop-types */

function Pm25NeaContainer({ pm25Data }) {
  console.log(pm25Data);

  // Sort the entries alphabetically by region
  const sortedData = Object.entries(pm25Data).sort(([regionA], [regionB]) =>
    regionA.localeCompare(regionB)
  );

  return (
    <div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          PM2.5 ADVISORY
        </h5>
        {sortedData.map(([region, value]) => (
          <p
            key={region}
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >
            {region}: {value} µg/m³
          </p>
        ))}
      </div>
    </div>
  );
}

export default Pm25NeaContainer;
