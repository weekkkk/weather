import { LogoIcon } from "@/app/assets";
import styles from "./header-layout.styles.module.scss";

export const HeaderLayout = () => {
  return (
    <header className={styles["header_layout"]}>
      <LogoIcon height={48} />
    </header>
  );
};
