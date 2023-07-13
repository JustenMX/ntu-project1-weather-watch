/* eslint-disable react/prop-types */
//dependencies
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// components
import NavSideBar from "../components/NavSideBar";
import WatchListContainer from "../components/WatchListContainer";
// data
import neaAPI from "../api/neaAPI";
import { useEffect } from "react";

function WatchList(props) {
  const { watchListRegion, region } = props;
  // State Management
  const [watchPsi, setWatchPsi] = useState([]);
  const [newWatchList, setNewWatchList] = useState([]);

  // GET PSI
  const getPSI = async () => {
    try {
      const response = await neaAPI.get(`/psi`);
      setWatchPsi(response.data);
      toast.promise("loading");
    } catch (error) {
      toast.error(error);
    }
  };

  // const handlePsi = () => {};
  // // debugging
  // console.log(watchPsi);

  useEffect(() => {
    getPSI();
  }, []);

  return (
    <div>
      <NavSideBar watchListRegion={watchListRegion} />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl">WatchList</h1>
          {/* map begins here */}

          {watchListRegion.map((watchItem, i) => (
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
