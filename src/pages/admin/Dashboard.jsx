
import TopBar from "../../components/admin/TobBar";
import BottomNavbar from "../../components/user/BottomNavbar";
export default function Dashboard() {
  return (
    <div className="flex ">
      <TopBar />
      <BottomNavbar />
      <div className="mt-14 mb-14 h-[calc(100vh-112px)] overflow-auto w-full border p-3 ">
        <h1>home page </h1>

      </div>
    </div>
  );
}
