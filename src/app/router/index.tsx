import { CountryListPage, TownListPage, TownWeatherPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CountryListPage />,
  },
  {
    path: "/:countryId",
    element: <TownListPage />,
  },
  {
    path: "/:countryId/:townName",
    element: <TownWeatherPage />,
  },
]);
