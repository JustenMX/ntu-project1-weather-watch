// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// components
import Button from "./Button";
 
import { useState,useEffect } from 'react';  

import regionalData from '../data/regionalData'; 

function PsiNea(props) {
  console.log("PsiNea"); 

  const [regionalDataList, setRegionalDataList ] = useState(regionalData); 
  const [selectedRegionPsi, setSelectedRegionPsi ] = useState();

  if(props !== "undefined" && props.psiObject !== "undefined"){
    console.log("props is not undefined");
    
    if(props.selectRegion !== "undefined"){
       
      console.log(props.psiObject.national); 
      const nationalPsi  = props.psiObject.national;

      //check north south east west
      console.log("check north south east west");
      for(let i = 0; i < regionalDataList.length; i++) {
        let obj = regionalDataList[i];
        if(obj.name == props.selectRegion){  
          console.log(obj.label_location['region']); 
          const northSouthEastWestCentral = obj.label_location['region'];

          //check north south east west psi 
          /*
          switch(northSouthEastWestCentral){
            case 'north': 
              break;
            case 'south': 
              break;
            case 'east':
              console.log("east");
              //console.log(props.psiObject.east);
              //setSelectedRegionPsi(props.psiObject.east);
              break;
            case 'west': 
              break;
            case 'central': 

              break;
          }
          break;
          */
        }
        
      }
       
    }
  }
   
 const getNorthSouthEastWest = (region) => {
    console.log("getNorthSouthEastWest");
  }
  
   
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://images.pexels.com/photos/7532428/pexels-photo-7532428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              PSI READINGS
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The 24-hour Pollutant Standards Index (PSI) is computed based on six air pollutants - PM2.5, PM10, ozone, sulphur dioxide, nitrogen dioxide and carbon monoxide. 
          </p>
          <Button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            buttonLabel={[
              "Read More",
              <FontAwesomeIcon
                icon={faArrowRight}
                key="faArrowRight"
                className="ml-2"
              />,
            ]}
            path="psi"
          />
        </div>
      </div>
    </>
  );
}

export default PsiNea;