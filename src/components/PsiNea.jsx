/* eslint-disable react/prop-types */
// dependencies
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// components
import Button from "./Button";

function PsiNea(props) {
  console.log("PsiNea");
  const [regionalDataList, setRegionalDataList] = useState(props.region);
  console.log("psi nea > " + props.region);

  let nationalBox = "";
  let nationalPsi = "";

  let regionBox = "";
  let northSouthEastWestCentral = "";
  let northSouthEastWestCentralPsi = "";

  let psiObject = props.psiObject;

  const handleBox = (psi) => {
    console.log("handleBox");
    if (psi > 300) {
      return "bg-red-300";
    } else if (psi > 200 && psi <= 300) {
      return "bg-orange-300";
    } else if (psi > 100 && psi <= 200) {
      return "bg-yellow-300";
    } else if (psi > 50 && psi <= 100) {
      return "bg-blue-300";
    } else if (psi > 0 && psi <= 55) {
      return "bg-green-300";
    } else {
      return "bg-white";
    }
  };

  const handleNorthSouthEastWestCentral = (region) => {
    console.log("PsiNeaContainer > handleNorthSouthEastWestCentral");
    for (let i = 0; i < regionalDataList.length; i++) {
      let obj = regionalDataList[i];
      if (obj.name == region) {
        console.log(obj.label_location["region"]);
        northSouthEastWestCentral = obj.label_location["region"].toUpperCase();
        return northSouthEastWestCentral;
      }
    }
  };

  const handleNorthSouthEastWestCentralPsi = (northSouthEastWestCentral) => {
    console.log("handleNorthSouthEastWestCentralPsi");
    switch (northSouthEastWestCentral.toUpperCase()) {
      case "NORTH":
        console.log(psiObject.north);
        return psiObject.north;
      case "SOUTH":
        console.log(props.psiObject.south);
        return props.psiObject.south;
      case "EAST":
        console.log(props.psiObject.east);
        return props.psiObject.east;
      case "WEST":
        console.log(props.psiObject.west);
        return props.psiObject.west;
      case "CENTRAL":
        console.log(props.psiObject.central);
        return props.psiObject.central;
    }
  };

  if (props != "undefined") {
    console.log("props is not undefined");
    console.log(psiObject);

    nationalPsi = psiObject.national;
    console.log("national psi: " + nationalPsi);
    nationalBox = handleBox(nationalPsi);
    console.log("nationalBox" + nationalBox);

    if (props.selectRegion != "") {
      //check north south east west
      console.log("check north south east west");

      northSouthEastWestCentral = handleNorthSouthEastWestCentral(
        props.selectRegion
      );
      northSouthEastWestCentralPsi = handleNorthSouthEastWestCentralPsi(
        northSouthEastWestCentral
      );

      if (northSouthEastWestCentral !== "") {
        console.log(northSouthEastWestCentral);
        regionBox = handleBox(northSouthEastWestCentralPsi);
      }
    }
  }

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {nationalBox !== "" ? (
          <div
            className={`max-w h-30 ${handleBox(
              nationalPsi
            )} border-gray-200 border rounded-lg`}
          >
            <div className="p-5">
              <dt className="text-base leading-7 text-gray-900">NATIONWIDE</dt>
              <p className="text-xs font-light mb-2 text-gray-900">
                based on 24hrs reading
              </p>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {nationalPsi}
              </dd>
            </div>
          </div>
        ) : null}
        {regionBox !== "" ? (
          <div
            className={`max-w h-30 ${handleBox(
              northSouthEastWestCentralPsi
            )} border-gray-200 border rounded-lg`}
          >
            <div className="p-5">
              <dt className="text-base leading-7 text-gray-900">
                {northSouthEastWestCentral} REGION
              </dt>
              <p className="text-xs font-light mb-2 text-gray-900">
                based on 24hrs reading
              </p>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {northSouthEastWestCentralPsi}
              </dd>
            </div>
          </div>
        ) : null}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            PSI READINGS
          </h5>

          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
            The 24-hour Pollutant Standards Index (PSI) is computed based on six
            air pollutants - PM2.5, PM10, ozone, sulphur dioxide, nitrogen
            dioxide, and carbon monoxide.
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
