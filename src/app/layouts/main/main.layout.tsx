import cls from "classnames";
import { MainLayoutStyles } from "./styles";

type Props = {
  children: JSX.Element;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main className={cls(MainLayoutStyles["main_layout"], "p-4_5")}>
      {children}
    </main>
  );
};
