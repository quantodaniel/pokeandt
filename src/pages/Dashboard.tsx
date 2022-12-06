import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <header>
        <h1>Dashboard</h1>
      </header>

      <aside>
        <ul>
          <li>
            <NavLink to="/pokemon/bulbasaur">bulbasaur</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon/venusaur">venusaur</NavLink>
          </li>
        </ul>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
