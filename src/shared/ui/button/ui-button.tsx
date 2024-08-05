import cls from "classnames";
import styles from "./ui-button.styles.module.scss";

type PropsType = {
  children?: JSX.Element | string;
  type?: string;
  left?: JSX.Element;
  className?: string;
};

export const UiButton = ({ children, type, left, className }: PropsType) => {
  const classes = cls(styles["ui_button"], {
    [styles["ui_button-primary"]]: !type || type == "primary",
    [styles["ui_button-second"]]: type == "second",
    [styles["ui_button-no_child"]]: !children,
  });

  return (
    <button className={`${classes} ${className}`}>
      {left}
      {children}
    </button>
  );
};
