import { CountryListPage, TownListPage, TownWeatherPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CountryListPage />,
  },
  {
    path: "/:counryId",
    element: <TownListPage />,
  },
  {
    path: "/:counryId/:townId",
    element: <TownWeatherPage />,
  },
]);
