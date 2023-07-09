//

function SelectionField() {
  return (
    <>
      <select
        id="area"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a Region / District</option>
        <option value="west">West</option>
        <option value="south">South</option>
        <option value="north">North</option>
        <option value="east">East</option>
      </select>
    </>
  );
}

export default SelectionField;
