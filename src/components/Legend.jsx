//
function Legend() {
  return (
    <div>
      <table className="table-auto w-full text-xs border border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border font-semibold">Readings</th>
            <th className="px-4 py-2 border font-semibold">Value</th>
            <th className="px-4 py-2 border font-semibold">Description</th>
            <th className="px-4 py-2 border font-semibold">Colour</th>
          </tr>
        </thead>
        <tbody>
          {/* PSI */}
          <tr>
            <td className="px-4 py-2 border font-light">PSI</td>
            <td className="px-4 py-2 border font-light">0 - 50</td>
            <td className="px-4 py-2 border font-light">Good</td>
            <td className="px-4 py-2 border bg-green-300 font-light">Green</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">51 - 100</td>
            <td className="px-4 py-2 border font-light">Moderate</td>
            <td className="px-4 py-2 border bg-blue-300 font-light">Blue</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">101 - 200</td>
            <td className="px-4 py-2 border font-light">Unhealthy</td>
            <td className="px-4 py-2 border bg-yellow-300 font-light">
              Yellow
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">201 - 300</td>
            <td className="px-4 py-2 border font-light">Very unhealthy</td>
            <td className="px-4 py-2 border bg-orange-300 font-light">
              Orange
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">Above 300</td>
            <td className="px-4 py-2 border font-light">Hazardous</td>
            <td className="px-4 py-2 border bg-red-300 font-light">Red</td>
          </tr>
          {/* PM2.5 */}
          <tr>
            <td className="px-4 py-2 border font-light">PM2.5</td>
            <td className="px-4 py-2 border font-light">0 - 55</td>
            <td className="px-4 py-2 border font-light">Band 1 - Normal</td>
            <td className="px-4 py-2 border bg-green-300 font-light">Green</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">56 - 150</td>
            <td className="px-4 py-2 border font-light">Band 2 - Elevated</td>
            <td className="px-4 py-2 border bg-blue-300 font-light">Blue</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">151 - 250</td>
            <td className="px-4 py-2 border font-light">Band 3 - High</td>
            <td className="px-4 py-2 border bg-yellow-300 font-light">
              Yellow
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">Above 250</td>
            <td className="px-4 py-2 border font-light">Band 4 - Very High</td>
            <td className="px-4 py-2 border bg-red-300 font-light">Red</td>
          </tr>
          {/* UV Index */}
          <tr>
            <td className="px-4 py-2 border font-light">UV Index</td>
            <td className="px-4 py-2 border font-light">0 - 2</td>
            <td className="px-4 py-2 border font-light">Low</td>
            <td className="px-4 py-2 border bg-green-300 font-light">Green</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">3 - 5</td>
            <td className="px-4 py-2 border font-light">Moderate</td>
            <td className="px-4 py-2 border bg-blue-300 font-light">Blue</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">6 - 7</td>
            <td className="px-4 py-2 border font-light">High</td>
            <td className="px-4 py-2 border bg-yellow-300 font-light">
              Yellow
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">8 - 10</td>
            <td className="px-4 py-2 border font-light">Very High</td>
            <td className="px-4 py-2 border bg-orange-300 font-light">
              Orange
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">Above 11</td>
            <td className="px-4 py-2 border font-light">Extreme</td>
            <td className="px-4 py-2 border bg-red-300 font-light">Red</td>
          </tr>
          {/* Wetbulb */}
          <tr>
            <td className="px-4 py-2 border font-light">Wetbulb</td>
            <td className="px-4 py-2 border font-light">Below 31</td>
            <td className="px-4 py-2 border font-light">
              Heat Stress Risk Level - Low
            </td>
            <td className="px-4 py-2 border bg-green-300 font-light">Green</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">31 - 31.9</td>
            <td className="px-4 py-2 border font-light">
              Heat Stress Risk Level - Moderate
            </td>
            <td className="px-4 py-2 border bg-yellow-300 font-light">
              Yellow
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border font-light">Above 32</td>
            <td className="px-4 py-2 border font-light">
              Heat Stress Risk Level - High
            </td>
            <td className="px-4 py-2 border bg-red-300 font-light">Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Legend;
