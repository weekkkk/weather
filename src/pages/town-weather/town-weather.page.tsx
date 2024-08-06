import { TownRow } from "@/widgets";
import { Outlet } from "react-router-dom";

export const TownWeatherPage = () => {
  return (
    <>
      <TownRow />
      <Outlet />
    </>
  );
};
