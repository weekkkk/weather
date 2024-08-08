import { FC } from "react";
import { HeaderLayout } from "./header";
import { MainLayout } from "./main";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <>
      <HeaderLayout />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};
