import { createBrowserRouter } from "react-router-dom";
import loadDataForRoutes from "src/loaders/routes";
import Dashboard from "src/pages/Dashboard";
import EmptyState from "src/pages/EmptyState";
import Home from "src/pages/Home";
import Pokemon from "src/pages/Pokemon";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
    loader: loadDataForRoutes,
  },
  {
    path: "/:filterType",
    element: <Dashboard />,
    loader: loadDataForRoutes,
    children: [
      {
        index: true,
        element: <EmptyState />,
      },
      {
        path: ":pokemonName",
        element: <Pokemon />,
      },
    ],
  },
]);

export default router;
