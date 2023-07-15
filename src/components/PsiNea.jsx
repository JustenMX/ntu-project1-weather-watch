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
 
  let nationalBox = "";
  let nationalPsi = "";

  let regionBox = "";
  let northSouthEastWestCentral = ""; 
  let northSouthEastWestCentralPsi = "" ;
  
  const handleBox = (psi) => {  
    console.log("handleBox");
    if(psi >= 300){
      return "red";
     }else if(psi >= 201){
      return "orange";
     }else if(psi >= 101){
      return "yellow";
     }else if(psi>= 51){
      return "blue";
     }else{
      return "green";
     }
  };

  if(props !== "undefined" && props.psiObject !== "undefined"){
    console.log("props is not undefined");
    console.log( props.psiObject );
    if(props.selectRegion !== "undefined"){
       
      nationalPsi  = props.psiObject.national;
      nationalBox = handleBox(nationalPsi);
      console.log("nationalBox" + nationalBox);
      //check north south east west
      console.log("check north south east west");
       
      for(let i = 0; i < regionalDataList.length; i++) {
        let obj = regionalDataList[i];
        if(obj.name == props.selectRegion){  
          console.log(obj.label_location['region']); 
          northSouthEastWestCentral = obj.label_location['region'].toUpperCase();
 
          //check north south east west psi  
          switch(northSouthEastWestCentral){
            case 'NORTH': 
              console.log(props.psiObject.north);   
              northSouthEastWestCentralPsi = props.psiObject.north;
              break;
            case 'SOUTH': 
              console.log(props.psiObject.south);  
              northSouthEastWestCentralPsi = props.psiObject.south;
              break;
            case 'EAST': 
              console.log(props.psiObject.east);   
              northSouthEastWestCentralPsi = props.psiObject.east;
              break;
            case 'WEST': 
              console.log(props.psiObject.west);  
              northSouthEastWestCentralPsi = props.psiObject.west;
              break;
            case 'CENTRAL': 
            console.log(props.psiObject.central);  
            northSouthEastWestCentralPsi = props.psiObject.central;
            break;
          } 
          break; 
        }
        
      }
      if(northSouthEastWestCentral !== ""){
        console.log(northSouthEastWestCentral);
        regionBox = handleBox(northSouthEastWestCentralPsi); 
      }
      
    }
  }
  
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {nationalBox === "green" ? 
        <div className="max-w h-30 bg-green-200 rounded-lg">
            <div className="p-5"> 
                <dt class="text-base leading-7 text-gray-600">NATIONAL PSI</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{nationalPsi}</dd> 
            </div>
          </div>
        : null}
        {nationalBox === "red" ? 
        <div className="max-w h-30 bg-red-200 rounded-lg">
            <div className="p-5"> 
                <dt class="text-base leading-7 text-gray-600">NATIONAL PSI</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{nationalPsi}</dd> 
            </div>
          </div>
        : null}
        {nationalBox === "orange" ? 
        <div className="max-w h-30 bg-orange-200 rounded-lg">
            <div className="p-5"> 
                <dt class="text-base leading-7 text-gray-600">NATIONAL PSI</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{nationalPsi}</dd> 
            </div>
          </div>
        : null}
        {nationalBox === "yellow" ? 
        <div className="max-w h-30 bg-yellow-200 rounded-lg">
            <div className="p-5"> 
                <dt class="text-base leading-7 text-gray-600">NATIONAL PSI</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{nationalPsi}</dd> 
            </div>
          </div>
        : null}
        {nationalBox === "blue" ? 
        <div className="max-w h-30 bg-blue-200 rounded-lg">
            <div className="p-5"> 
                <dt class="text-base leading-7 text-gray-600">NATIONAL PSI</dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{nationalPsi}</dd> 
            </div>
          </div>
        : null}
        {regionBox === "green"?   
        <div className="max-w h-30 bg-green-200 rounded-lg">
          <div className="p-5"> 
            <dt class="text-base leading-7 text-gray-600">{northSouthEastWestCentral} PSI</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{northSouthEastWestCentralPsi}</dd> 
          </div>
        </div>
        : null}
        {regionBox === "red" ?   
        <div className="max-w h-30 bg-red-200 rounded-lg">
          <div className="p-5"> 
            <dt class="text-base leading-7 text-gray-600">{northSouthEastWestCentral} PSI</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{northSouthEastWestCentralPsi}</dd> 
          </div>
        </div>
        : null}
        {regionBox === "yellow" ?   
        <div className="max-w h-30 bg-yellow-200 rounded-lg">
          <div className="p-5"> 
            <dt class="text-base leading-7 text-gray-600">{northSouthEastWestCentral} PSI</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{northSouthEastWestCentralPsi}</dd> 
          </div>
        </div>
        : null}
        {regionBox === "orange" ?   
        <div className="max-w h-30 bg-orange-200 rounded-lg">
          <div className="p-5"> 
            <dt class="text-base leading-7 text-gray-600">{northSouthEastWestCentral} PSI</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{northSouthEastWestCentralPsi}</dd> 
          </div>
        </div>
        : null}
        {regionBox === "blue" ?   
        <div className="max-w h-30 bg-blue-200 rounded-lg">
          <div className="p-5"> 
            <dt class="text-base leading-7 text-gray-600">{northSouthEastWestCentral} PSI</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{northSouthEastWestCentralPsi}</dd> 
          </div>
        </div>
        : null}
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