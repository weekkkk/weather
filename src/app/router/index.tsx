import { TownWeatherPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";
import { ModalLayout } from "../layouts";
import { SelectTownForm } from "@/widgets";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TownWeatherPage />,
    children: [
      {
        path: "form",
        element: <ModalLayout />,
        children: [
          {
            path: "select-town",
            element: (
              <SelectTownForm
                callBack={(navigate) => navigate({ pathname: "/" })}
              />
            ),
          },
        ],
      },
    ],
  },
]);
