import MainTable from "../../components/admin/table";
import TopBar from "../../components/admin/TobBar";
import BottomNavbar from "../../components/user/BottomNavbar";

export default function PatientPage() {
  return (
    <div className="flex ">
      <TopBar />
      <BottomNavbar />
      <div className="mt-12 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
        <div className="flex w-full flex-col md:flex-row justify-between mb-1">
          <div className="w-1/2">
            <h3 className="text-2xl p-1 font-bold">Manage Users</h3>
          </div>
          <div className="w-1/2 text-right">
            <input
              type="text"
              placeholder="search"
              className="custom-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed border mx-1 rounded-md "
              value=""
            />

            <button
              type="button"
              className="text-blue-700 hover:text-white border border-blue-700 align-top hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Add User
            </button>
          </div>
        </div>

        <div className="py-1">
          <MainTable />
        </div>
      </div>
    </div>
  );
}
