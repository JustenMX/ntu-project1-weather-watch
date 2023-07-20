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

  const colourMatrixPm25 = (pm25) => {
    if (pm25 > 250) {
      return "bg-red-300";
    } else if (pm25 > 150 && pm25 <= 250) {
      return "bg-yellow-300";
    } else if (pm25 > 55 && pm25 <= 150) {
      return "bg-blue-300";
    } else if (pm25 > 0 && pm25 <= 55) {
      return "bg-green-300";
    } else {
      return "bg-white";
    }
  };

  const bgColor = selectedReading
    ? colourMatrixPm25(selectedReading)
    : "bg-white";

  return (
    <>
      <div
        className={`max-w-sm ${bgColor} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            PM2.5
          </h5>
          <p className="font-light text-xs mb-5">based on 1-hr reading</p>

          {selectedReading ? (
            <h1 className="mb-5 font-bold text-6xl text-gray-900 dark:text-white">
              {selectedReading}{" "}
              <span className="text-lg font-normal">µg/m³</span>
            </h1>
          ) : (
            <p className="mb-5 font-light">No data found...</p>
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
