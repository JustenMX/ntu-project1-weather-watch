/* eslint-disable react/prop-types */
function WatchListContainer(props) {
  const { watchListValue, watchListLabel, watchListText } = props;
  return (
    <>
      <div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {watchListText}
          </p>
          <h5 className="mb-2 text-4xl font-normal tracking-tight text-gray-900 dark:text-white text-center">
            {watchListValue}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
            {watchListLabel}
          </p>
        </div>
      </div>
    </>
  );
}

export default WatchListContainer;
