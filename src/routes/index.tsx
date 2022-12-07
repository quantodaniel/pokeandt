import { createBrowserRouter } from "react-router-dom";
import Dashboard from "src/pages/Dashboard";
import Home from "src/pages/Home";
import Pokemon from "src/pages/Pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:type/pokemon",
    element: <Dashboard />,
    children: [
      {
        path: "*",
        element: <Pokemon />,
      },
    ],
  },
]);

export default router;
