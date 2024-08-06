import { Outlet } from "react-router-dom";
import styles from "./modal-layout.styles.module.scss";

export const ModalLayout = () => {
  return (
    <div className={styles["modal_layout"]}>
      <div className={styles["modal_layout-content"]}>
        <Outlet />
      </div>
    </div>
  );
};
