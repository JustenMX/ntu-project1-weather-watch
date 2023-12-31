/* eslint-disable react/prop-types */
// css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
//dependencies
import { toast } from "react-toastify";
// components
import Button from "../components/Button";

function SelectionField(props) {
  const {
    region,
    selectRegion,
    handlerSelectOption,
    handlerAddWatchListRegion,
    isOptionSelected,
  } = props;

  // handler for option selected in dropdown
  const handlerOnChange = (event) => {
    handlerSelectOption(event.target.value);
  };

  return (
    <>
      <div className="relative flex w-1/2">
        <select
          id="region"
          value={selectRegion}
          className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handlerOnChange}
        >
          <option selected>Choose your location</option>
          {region.map((data, i) => (
            <option key={i} value={data.name}>
              {data.name}
            </option>
          ))}
        </select>
        {/* <Button
          className="flex items-center justify-center p-2 ml-2 w-14 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          buttonLabel={<FontAwesomeIcon icon={faLocationArrow} size="xl" />}
        /> */}
        {isOptionSelected ? (
          <Button
            className="flex items-center justify-center p-2 ml-2 w-14 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            buttonLabel={<FontAwesomeIcon icon={faBookmark} size="xl" />}
            buttonFunc={handlerAddWatchListRegion}
            title="Click to add location to Watch List"
          />
        ) : (
          <Button
            className="flex items-center justify-center p-2 ml-2 w-14 text-sm font-medium text-white bg-slate-600 rounded-lg border"
            buttonLabel={<FontAwesomeIcon icon={faBookmark} size="xl" />}
            buttonFunc={() => toast.warning("Please select a valid location")}
            title="Choose a location first to add to Watch List"
          />
        )}
      </div>
    </>
  );
}

export default SelectionField;
