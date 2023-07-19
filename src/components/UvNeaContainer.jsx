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
          <div className="w-full px-4 py-2 text-center text-gray-700 dark:text-white text-justify">
          <p className="mb-4">The UVI is an international standard index that describes the level of solar UV radiation on the earth’s surface. The index ranges from 0 to 11+ and the values are grouped into various exposure categories. A higher index value indicates a greater potential for harmful effects to the skin and eyes.</p>
            
          <p className="mb-4">In Singapore, the UVI is measured at the Changi Meteorological Station and reported hourly between 7am and 7pm. The reported UVI represents its average value for the past 15 minutes. In the presence of rain and/or under cloudy conditions, the UVI value is reduced. Therefore, the UVI value may vary in other parts of the island.</p>

          <p className="mb-4">Advisory on Sun Protection Measures *</p>

          <p className="mb-4">Some ultraviolet (UV) exposure is important for health functions such as Vitamin D production in the body and treating diseases like jaundice in babies or psoriasis and rickets in adults.</p>

          <p className="mb-4">However, excessive exposure to solar UV radiation can result in harmful effects to the skin and eyes. If you must be out in the sun, especially between 11am and 3pm when the UV index levels are highest, the following simple protective measures can help to minimise the effects.</p>

            <ul className="list-disc list-inside mb-4">
              <li>Use sunscreen (at least SPF 30)</li>
              <li>Use an umbrella and seek shade</li>
              <li>Wear sunglasses that block UVA/UVB rays</li>
              <li>Wear a broad-brimmed hat</li>
            </ul>

            <p>* Source: Ministry of Health</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UvNeaContainer;
