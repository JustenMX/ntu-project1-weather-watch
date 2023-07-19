/* eslint-disable react/prop-types */
// data
// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// components
import Button from "./Button";

function Pm25Nea(props) {
  const { region, selectRegion, pm25Data } = props;

  // Find the matching region object based on the selectRegion
  const selectedRegion = region.find((item) => item.name === selectRegion);
  console.log(selectedRegion);

  // Get the corresponding region string
  const regionString = selectedRegion
    ? selectedRegion.label_location.region
    : "";
  console.log(regionString);
  console.log(pm25Data);

  // Get the reading for the selected region
  const selectedReading = pm25Data[regionString];
  console.log(selectedReading);

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            PM2.5 READINGS
          </h5>
          {selectedReading ? (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Reading: {selectedReading} µg/m³
            </p>
          ) : (
            <p>No data found.</p>
          )}
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
            path="pm25"
          />
        </div>
      </div>
    </>
  );
}

export default Pm25Nea;
