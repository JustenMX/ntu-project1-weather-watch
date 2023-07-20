/* eslint-disable react/prop-types */
// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function UvNea(props) {
  const { uvIndex } = props;

  // Background color change
  const colourMatrixUvIndex = (uvIndex) => {
    if (uvIndex > 11) {
      return "bg-red=300";
    } else if (uvIndex > 7 && uvIndex <= 10) {
      return "bg-orange-300";
    } else if (uvIndex > 5 && uvIndex <= 7) {
      return "bg-yellow-300";
    } else if (uvIndex > 2 && uvIndex <= 5) {
      return "bg-blue-300";
    } else if (uvIndex >= 0 && uvIndex <= 2) {
      return "bg-green-300";
    } else {
      return "bg-white";
    }
  };

  const bgColor = uvIndex ? colourMatrixUvIndex(uvIndex) : "bg-green-300";

  return (
    <>
      <div
        className={`max-w-sm ${bgColor} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center p-5`}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ULTRAVIOLET INDEX (UV)
        </h5>
        <p className="font-light text-xs mb-5">
          based on average value for the past 15 minutes
        </p>

        {uvIndex !== null ? (
          <p className="mb-3 font-bold text-6xl text-gray-900 dark:text-white">
            {uvIndex}
          </p>
        ) : (
          <p className="mb-3 font-bold text-6xl text-gray-900 dark:text-white">
            Loading UV index...
          </p>
        )}

        <div className="mt-5">
          <Button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto"
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
