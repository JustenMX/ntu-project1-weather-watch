function Weather2HrsContainer({ selectedRegionForecast }) {
  // an object of weather advisories with weather conditions as properties
  const weather2HrAdvisories = { 
    Cloudy: 
      "Enjoy the fine weather and outdoor activities.",
    "Fair (Day)":
      "Enjoy outdoor activities and soak up the sun safely by applying sunscreen.",
    "Fair (Night)":
      "Enjoy a pleasant evening outdoors or stargaze under the clear night sky.",
    "Fair & Warm":
      "Stay hydrated, wear lightweight clothing, and find shade or air-conditioned spaces to cool down.",
    Hazy: 
      "Limit outdoor activities, especially for sensitive individuals, and consider wearing a mask for respiratory protection.",
    "Heavy Rain":
      "Stay indoors and avoid areas prone to flooding. Ensure that drainage systems are clear.",
    "Heavy Showers":
      "Seek shelter and stay indoors until the heavy rainfall subsides.",
    "Heavy Thundery Showers with Gusty Winds":
      "Take cover indoors and stay away from windows. Avoid open areas and tall objects that may attract lightning.",
    "Heavy Thundery Showers":
      "Seek shelter indoors until the heavy rainfall and thunderstorms pass.",
    "Light Rain":
      "Carry an umbrella or raincoat for protection against the light rain.",
    "Light Showers":
      "Carry an umbrella or raincoat for protection against the light rain showers.",
    Mist: 
      "Be cautious while moving outdoors or driving as visibility may be reduced. Wear light-colored or reflective clothing to increase visibility to drivers. Drivers should use headlights and keep a safe following distance.",
    "Moderate Rain":
      "Take precautions against wet conditions and consider carrying an umbrella or raincoat.",
    "Partly Cloudy (Night)":
      "Enjoy the partly cloudy night sky and pleasant weather.",
    "Partly Cloudy (Day)":
      "Enjoy the partly cloudy weather and outdoor activities.",
    "Passing Showers":
      "Be prepared for brief periods of rain showers and consider carrying an umbrella or raincoat.",
    Showers:
      "Carry an umbrella or raincoat to stay dry during the rain showers.",
    "Slightly Hazy":
      "If sensitive to poor air quality, consider reducing outdoor activities and wearing a mask for respiratory protection.",
    "Thundery Showers":
      "Seek shelter indoors and stay away from windows until the thunderstorms and rain showers pass.",
    Windy:
      "Secure loose objects and be cautious while outdoors, especially in open areas. Consider wearing a windbreaker for protection against strong winds.",
  };

  // constant to display the object value or blank if no region is seleted.
  const displayWeather2HrAdvisory =
    weather2HrAdvisories[selectedRegionForecast] || "";

  return (
    <>
      <div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            2-Hour Weather Condition
          </h5>
          <p className="mb-3 text-3xl font-mono font-bold text-gray-900 dark:text-gray-400 bg-yellow-100">
            {displayWeather2HrAdvisory}
          </p>
        </div>
      </div>
    </>
  );
}

export default Weather2HrsContainer;
