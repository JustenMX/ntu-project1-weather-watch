/* eslint-disable react/prop-types */
// dependencies
import "weather-icons/css/weather-icons.css";

function WatchListContainer(props) {
  const {
    watchListValue,
    watchListLabel,
    watchListText,
    bgColour,
    icon,
    symbol,
  } = props;
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center mx-auto ${bgColour} border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
      >
        <div className="flex flex-col items-center justify-center p-4">
          <div className="mt-2">
            <i className={`${icon} text-3xl`} />
          </div>
          <div className="mt-2">
            <h5 className="mb-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-white text-center">
              {watchListValue} <span className="text-xs">{symbol}</span>
            </h5>
          </div>
          <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {watchListText}
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-400 text-center text-xs font-light">
            {watchListLabel}
          </p>
        </div>
      </div>
    </>
  );
}

export default WatchListContainer;
