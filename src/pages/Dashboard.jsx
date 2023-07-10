import NavSideBar from "../components/NavSideBar";
import PsiNea from "../components/PsiNea";
import Pm25Nea from "../components/Pm25Nea";
import Weather2Hrs from "../components/Weather2Hrs";
import WetbulbTemp from "../components/WetbulbTemp";
import SelectionField from "../components/SelectionField";

function Dashboard() {
  return (
    <>
      <NavSideBar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl mb-5">Dashboard</h1>
          <div className="mb-10 flex justify-center">
            <SelectionField />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <PsiNea />
            <Pm25Nea />
            <Weather2Hrs />
            <WetbulbTemp />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;