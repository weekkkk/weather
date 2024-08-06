import styles from "./main-layout.styles.module.scss";

type Props = {
  children: JSX.Element;
};

export const MainLayout = ({ children }: Props) => {
  return <main className={styles["main_layout"]}>{children}</main>;
};
