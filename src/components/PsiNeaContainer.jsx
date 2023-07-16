
import psiInfo from '../data/psiInfo'; 
 
import { useState,useEffect } from 'react'; 

import regionalData from '../data/regionalData';  

function PsiNeaContainer(props) { 
  console.log("PsiNeaContainer selectRegion : " + props.selectRegion); 
  console.log("PsiNeaContainer psiObject : " + props.psiObject);
  console.log("PsiNeaContainer nationalPsi : " + props.psiObject.national);

  const [regionalDataList, setRegionalDataList ] = useState(regionalData);  
  const [psiObject, setPsiObject] = useState(props.psiObject);
  const [psiAdvisory, setPsiAdvisory] = useState(psiInfo);  
   
  let currentAdvisory = null;
  let northSouthEastWestCentral = "";
  let currentPsi = props.psiObject.national;
 
  const handleNorthSouthEastWestCentral = (region) => {  
    console.log("PsiNeaContainer > handleNorthSouthEastWestCentral");
    for(let i = 0; i < regionalDataList.length; i++) {
      let obj = regionalDataList[i];
      if(obj.name == region){  
        console.log(obj.label_location['region']); 
        northSouthEastWestCentral = obj.label_location['region'].toUpperCase();
        return northSouthEastWestCentral;
      }
    } 
  }
  
  const handleNorthSouthEastWestCentralPsi = (northSouthEastWestCentral) => { 
    console.log("handleNorthSouthEastWestCentralPsi");
    switch(northSouthEastWestCentral.toUpperCase()){
      case 'NORTH': 
        console.log(psiObject.north);   
        return psiObject.north; 
      case 'SOUTH': 
        console.log(props.psiObject.south);  
        return props.psiObject.south; 
      case 'EAST': 
        console.log(props.psiObject.east);   
        return props.psiObject.east; 
      case 'WEST': 
        console.log(props.psiObject.west);  
        return props.psiObject.west; 
      case 'CENTRAL': 
      console.log(props.psiObject.central);  
      return props.psiObject.central; 
    } 
  }
  
  if(props.selectRegion != "undefined"){
    console.log("PsiNeaContainer selectRegion > " + props.selectRegion);
    northSouthEastWestCentral = handleNorthSouthEastWestCentral(props.selectRegion);
    currentPsi = handleNorthSouthEastWestCentralPsi(northSouthEastWestCentral);
  } 

  for(let i = 0; i < psiAdvisory.length; i++) {
    let obj = psiAdvisory[i];
    if(currentPsi < obj.psiLowerBound){
      currentAdvisory = psiAdvisory[i-1];
      console.log(currentAdvisory);
      
      break;
    }

  }
  
  return (
    <>
      <div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            PSI Reading
          </h5> 
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">{currentAdvisory.descriptor.toUpperCase()} ({currentAdvisory.psiRange})</p>
          </div> 
          <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                        CATEGORY
                      </th>
                      <th scope="col" class="px-6 py-3">
                        ADVISORY  
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white dark:bg-gray-800">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Healthy Persons
                      </th>
                      <td class="px-6 py-4">
                        {currentAdvisory.health_advisory.healthy_persons}
                      </td> 
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Elderly, Pregnant Woman, Children
                      </th>
                      <td class="px-6 py-4">
                        {currentAdvisory.health_advisory.elderly_pregnant_children}
                      </td> 
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Persons with Chronic Lung Disease, Heart Disease
                      </th>
                      <td class="px-6 py-4">
                        {currentAdvisory.health_advisory.lung_heart_disease}
                      </td> 
                  </tr>
              </tbody> 
            </table>
          </div>   
        </div>
      </div>
    </>
  );
}

export default PsiNeaContainer;