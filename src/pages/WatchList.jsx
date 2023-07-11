/* eslint-disable react/prop-types */
import NavSideBar from "../components/NavSideBar";
import WatchListContainer from "../components/WatchListContainer";

function WatchList(props) {
  const { watchList } = props;

  return (
    <div>
      <NavSideBar watchList={watchList} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl">WatchList</h1>
          {/* map begins here */}

          {watchList.map((watchItem, i) => (
            <div
              key={i}
              className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 my-5"
            >
              <div className="bg-blue-700 px-4 py-3 text-white rounded-lg">
                <p className="text-center text-lg font-semibold">
                  {watchItem.region}
                </p>
              </div>
              <div className="grid grid-cols-5 gap-4 my-4">
                <WatchListContainer
                  watchListValue="0"
                  watchListLabel="24-hr PSI"
                />
                <WatchListContainer
                  watchListValue="0"
                  watchListLabel="1-hr PM2.5 (µg/m³)"
                />
                <WatchListContainer
                  watchListValue="0"
                  watchListLabel="24-hr weather forecast"
                />
                <WatchListContainer
                  watchListValue="0"
                  watchListLabel="wetbulb temperature"
                />
                <WatchListContainer
                  watchListValue="0"
                  watchListLabel="Ultraviolet Index"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchList;
