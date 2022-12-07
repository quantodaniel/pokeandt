import { Outlet } from "react-router-dom";
import Sidebar from "src/components/organisms/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-80">
        <Sidebar />
      </div>

      <main className="h-screen flex flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
