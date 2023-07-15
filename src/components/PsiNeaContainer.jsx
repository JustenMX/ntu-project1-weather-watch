
import psiInfo from '../data/psiInfo'; 
 
import { useState,useEffect } from 'react';  

function PsiNeaContainer(props) {
  console.log(PsiNeaContainer);
  console.log(props); 
  const [psiAdvisory, setPsiAdvisory] = useState(psiInfo);  
  let currentPsi = 31; 
  let currentAdvisory = null;
  
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