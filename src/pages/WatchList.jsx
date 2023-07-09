import NavSideBar from "../components/NavSideBar";

function WatchList() {
  return (
    <div>
      <NavSideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl">WatchList</h1>
          <div className="grid grid-cols-4 gap-4 mb-4"></div>
        </div>
      </div>
    </div>
  );
}

export default WatchList;
