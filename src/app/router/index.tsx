import { CountryListPage, TownListPage, TownWeatherPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <CountryListPage />,
      },
      {
        path: ":countryId",
        element: <TownListPage />,
      },
      {
        path: ":countryId/:townName",
        element: <TownWeatherPage />,
      },
    ],
  },
]);
