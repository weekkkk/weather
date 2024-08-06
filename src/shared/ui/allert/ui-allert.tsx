import styles from "./ui-allert.styles.module.scss";

type UiAllertPropsType = {
  left?: JSX.Element;
  children: JSX.Element | string;
};

export const UiAllert = ({ children, left }: UiAllertPropsType) => {
  return (
    <div className={styles["ui_allert"]}>
      <div>{left}</div>
      <span>{children}</span>
    </div>
  );
};
