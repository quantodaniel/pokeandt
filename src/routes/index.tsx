import { createBrowserRouter } from "react-router-dom";
import loadDataForDetails from "src/loaders/details";
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
    errorElement: <Home />,
    children: [
      {
        index: true,
        element: <EmptyState />,
      },
      {
        path: ":pokemonName",
        element: <Pokemon />,
        loader: async (args) => {
          await loadDataForRoutes();
          return loadDataForDetails(args);
        },
      },
    ],
  },
]);

export default router;
