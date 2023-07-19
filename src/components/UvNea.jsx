// dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import PropTypes from "prop-types";

function UvNea(props) {
  const { uvIndex } = props;

  // Background color change
  const colourMatrixUvIndex = (uvIndex) => {
    if (uvIndex <= 2) {
      return "bg-green-100";
    } else if (uvIndex <= 5) {
      return "bg-yellow-200";
    } else if (uvIndex <= 7) {
      return "bg-orange-200";
    } else if (uvIndex <= 10) {
      return "bg-red-200";
    } else {
      return "bg-purple-200";
    }
  };

  const bgColor = uvIndex ? colourMatrixUvIndex(uvIndex) : "bg-green-500";

  return (
    <>
      <div
        className={`max-w-sm ${bgColor} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center p-5`}
      >
        <h5 className="text-4xl text-center font-bold mb-4">UV Index</h5>
        {uvIndex !== null ? (
          <p className="text-5xl text-center mb-4">{uvIndex}</p>
        ) : (
          <p className="text-4xl text-center mb-4">Loading UV index...</p>
        )}
        <div>
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
