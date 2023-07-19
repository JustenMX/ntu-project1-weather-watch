import { useEffect } from "react";

function UvNeaContainer() {
  return (
    <>
<div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="w-full px-4 py-2">
          <table className="table-auto mx-auto text-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 font-bold text-center">Index</th>
                <th className="px-4 py-2 font-bold text-center">Level</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold text-green-700">0 - 2</td>
                <td className="border px-4 py-2 text-center font-semibold text-green-700">Low</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold text-yellow-500">3 - 5</td>
                <td className="border px-4 py-2 text-center font-semibold text-yellow-500">Moderate</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold text-orange-500">6 - 7</td>
                <td className="border px-4 py-2 text-center font-semibold text-orange-500">High</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold text-red-600">8 - 10</td>
                <td className="border px-4 py-2 text-center font-semibold text-red-600">Very High</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold text-purple-700">Above 11</td>
                <td className="border px-4 py-2 text-center font-semibold text-purple-700">Extreme</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UvNeaContainer;
