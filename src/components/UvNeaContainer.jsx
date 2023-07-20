function UvNeaContainer() {
  return (
    <>
      <div className="flex flex-col items-center mx-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="w-full px-4 py-2">
          <table className="table-auto mx-auto text-lg mb-2">
            <thead>
              <tr>
                <th className="px-4 py-2 font-bold text-center">UV Index</th>
                <th className="px-4 py-2 font-bold text-center">Level</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold text-green-700">
                  0 - 2
                </td>
                <td className="border px-4 py-2 text-center font-semibold text-green-700">
                  Low
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold text-yellow-500">
                  3 - 5
                </td>
                <td className="border px-4 py-2 text-center font-semibold text-yellow-500">
                  Moderate
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold text-orange-500">
                  6 - 7
                </td>
                <td className="border px-4 py-2 text-center font-semibold text-orange-500">
                  High
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold text-red-600">
                  8 - 10
                </td>
                <td className="border px-4 py-2 text-center font-semibold text-red-600">
                  Very High
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center font-semibold text-purple-700">
                  Above 11
                </td>
                <td className="border px-4 py-2 text-center font-semibold text-purple-700">
                  Extreme
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full px-4 py-2 text-gray-700 dark:text-white flex flex-wrap">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <p className="mb-4 text-sm">
                The UVI is an international standard index that describes the
                level of solar UV radiation on the earth’s surface. The index
                ranges from 0 to 11+ and the values are grouped into various
                exposure categories. A higher index value indicates a greater
                potential for harmful effects to the skin and eyes.
              </p>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
              <p className="mb-4 text-sm">
                Advisory on Sun Protection Measures *
              </p>

              <ul className="list-disc list-inside mb-4 text-sm">
                <li>Use sunscreen (at least SPF 30)</li>
                <li>Use an umbrella and seek shade</li>
                <li>Wear sunglasses that block UVA/UVB rays</li>
                <li>Wear a broad-brimmed hat</li>
              </ul>
              <p className="text-sm">* Source: Ministry of Health</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UvNeaContainer;
