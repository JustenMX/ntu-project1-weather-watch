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

//psi 
import { useState,useEffect } from 'react';  
import neaAPI from '../api/neaAPI';
import regionalData from '../data/regionalData';

function Dashboard(props) {
  const {
    region,
    selectRegion,
    handlerSelectOption,
    handlerAddWatchList,
    ToastContainer,
    watchList,
    isOptionSelected,
  } = props;

     
  const [psiObject, setPsiObject] = useState([]);

  const apiGetPsi = async () => {
    try { 
      console.log("apiGetPsi");
      const response = await neaAPI.get(`/psi`); 
      setPsiObject(response.data.items[0]['readings']['psi_twenty_four_hourly']);
        
    }catch (error) {
      console.log(error.message);
    }
 
  } 

  useEffect(() => {
    apiGetPsi();
  }, [])

  return (
    <>
      <NavSideBar watchList={watchList} />
      <div className="p-4 sm:ml-64">
        <ToastContainer />
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl mb-5">Dashboard</h1>

          <div className="mb-10 flex justify-center">
            <SelectionField
              region={region}
              selectRegion={selectRegion}
              handlerSelectOption={handlerSelectOption}
              handlerAddWatchList={handlerAddWatchList}
              isOptionSelected={isOptionSelected}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <PsiNea selectRegion={selectRegion} psiObject={psiObject} />
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