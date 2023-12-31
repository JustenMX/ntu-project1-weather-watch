/* eslint-disable react/prop-types */
import ExternalButton from "./ExternalButton";
function DevCards(props) {
  const { devName, devTitle, devImg, linkedin, github } = props;
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-32 h-32 mb-3 mt-5 rounded-full shadow-lg"
            src={devImg}
            alt="dev profile images"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {devName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {devTitle}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <ExternalButton
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              extButtonLabel="LinkedIn"
              hrefLink={linkedin}
            />
            <ExternalButton
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              extButtonLabel="Github"
              hrefLink={github}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DevCards;
