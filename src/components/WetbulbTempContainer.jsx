function WetbulbTempController({dryTemp, humidity, wetBulbTemp, selectedStationId}) {
  return (
    <>
      <div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Wetbulb Temp Readings
          </h5>
          <div>
            <p>Dry Temp: {dryTemp && dryTemp[selectedStationId]}</p>
            <p>Humidity: {humidity && humidity[selectedStationId]}</p>
            <p>Wet Bulb Temp: {wetBulbTemp && wetBulbTemp[selectedStationId]}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WetbulbTempController;
