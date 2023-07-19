// dependencies
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function UvNea(props) {

  const { uvIndex } = props;
  
  // Background color change
  const colourMatrixUvIndex = (uvIndex) => {
    if (uvIndex <= 2) {
      return "bg-green-500";
    } else if (uvIndex <= 5) {
      return "bg-yellow-500";
    } else if (uvIndex <= 7) {
      return "bg-orange-500";
    } else if (uvIndex <= 10) {
      return "bg-red-500";     
    } else {
      return "bg-purple-500";
    }
  };

  const bgColor = uvIndex ? colourMatrixUvIndex(uvIndex) : "bg-green-500";

  return (
    <>
      <div className={`max-w-sm ${bgColor} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
        <a href="#">
        <h1>Current UV Index</h1>
        {uvIndex !== null ? (
        <p>{uvIndex}</p>
      ) : (
        <p>Loading UV index...</p>
      )}
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              UV Index
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          UV Index value averaged over the past hour. Updated every hour between 7 AM and 7 PM everyday.
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
            path="uv"
          />
        </div>
      </div>
    </>
  );
}

export default UvNea;


