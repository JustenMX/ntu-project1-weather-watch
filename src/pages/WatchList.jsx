/* eslint-disable react/prop-types */
import NavSideBar from "../components/NavSideBar";
import WatchListContainer from "../components/WatchListContainer";

function WatchList(props) {
  const { watchList } = props;
  return (
    <div>
      <NavSideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl">WatchList</h1>
          {/* map begins here */}
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="bg-indigo-600 px-4 py-3 text-white rounded-lg">
              <p className="text-center text-lg font-semibold">
                {watchList.region}
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <WatchListContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchList;
