import { createBrowserRouter } from "react-router-dom";
import loadDataForDetails from "src/loaders/details";
import loadDataForRoutes from "src/loaders/routes";
import PageDashboard from "src/pages/PageDashboard";
import PageEmptyState from "src/pages/PageEmptyState";
import PageHome from "src/pages/PageHome";
import PageDetails from "src/pages/PageDetails";

const router = createBrowserRouter([
  {
    index: true,
    element: <PageHome />,
    loader: loadDataForRoutes,
  },
  {
    path: "/:filterType",
    element: <PageDashboard />,
    loader: loadDataForRoutes,
    errorElement: <PageHome />,
    children: [
      {
        index: true,
        element: <PageEmptyState />,
      },
      {
        path: ":pokemonName",
        element: <PageDetails />,
        loader: async (args) => {
          await loadDataForRoutes();
          return loadDataForDetails(args);
        },
      },
    ],
  },
]);

export default router;
