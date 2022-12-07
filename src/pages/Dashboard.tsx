import { Outlet } from "react-router-dom";
import Sidebar from "src/components/organisms/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-80">
        <Sidebar />
      </div>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
