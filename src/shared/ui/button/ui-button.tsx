import cls from "classnames";
import styles from "./ui-button.styles.module.scss";

type PropsType = {
  children?: JSX.Element | string;
  onClick: () => void;
  type?: string;
  left?: JSX.Element;
  className?: string;
};

export const UiButton = ({
  onClick,
  children,
  type,
  left,
  className,
}: PropsType) => {
  const classes = cls(styles["ui_button"], {
    [styles["ui_button-primary"]]: !type || type == "primary",
    [styles["ui_button-second"]]: type == "second",
    [styles["ui_button-no_child"]]: !children,
  });

  return (
    <button onClick={onClick} className={`${classes} ${className}`}>
      {left}
      {children}
    </button>
  );
};
