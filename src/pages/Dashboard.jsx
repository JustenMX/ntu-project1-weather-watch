/* eslint-disable react/prop-types */
// dependencies
import { Outlet } from "react-router-dom";
// components
import NavSideBar from "../components/NavSideBar";
import PsiNea from "../components/PsiNea";
import Pm25Nea from "../components/Pm25Nea";
import Weather2Hrs from "../components/Weather2Hrs";
import WetbulbTemp from "../components/WetbulbTemp";
import UvNea from "../components/UvNea";
import SelectionField from "../components/SelectionField";
import SingaporeMap from "../components/SingaporeMap";

function Dashboard(props) {
  const {
    region,
    selectRegion,
    handlerSelectOption,
    handlerAddWatchListRegion,
    ToastContainer,
    watchListCount,
    isOptionSelected,
  } = props;
  return (
    <>
      <NavSideBar watchListCount={watchListCount} />
      <div className="p-4 sm:ml-64">
        <ToastContainer />
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl mb-5">Dashboard</h1>

          <div className="mb-10 flex justify-center">
            <SelectionField
              region={region}
              selectRegion={selectRegion}
              handlerSelectOption={handlerSelectOption}
              handlerAddWatchListRegion={handlerAddWatchListRegion}
              isOptionSelected={isOptionSelected}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <PsiNea />
            <Pm25Nea />
            <Weather2Hrs />
            <WetbulbTemp />
            <UvNea />
          </div>
        </div>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-5">
          <h1 className="text-center font-bold text-2xl mb-5">Read More</h1>
          <Outlet />
        </div>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-5">
          <h1 className="text-center font-bold text-2xl mb-5">Singapore Map</h1>
          <SingaporeMap />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
