import cls from "classnames";
import styles from "./ui-button.styles.module.scss";

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element | string;
  onClick?: () => void;
  color?: string;
  left?: JSX.Element;
  right?: JSX.Element;
  className?: string;
}

export const UiButton: React.FC<PropsType> = ({
  onClick,
  children,
  color,
  left,
  right,
  className,
  ...rest
}) => {
  const classes = cls(styles["ui_button"], {
    [styles["ui_button-primary"]]: !color || color == "primary",
    [styles["ui_button-second"]]: color == "second",
    [styles["ui_button-no_child"]]: !children,
  });

  return (
    <button {...rest} onClick={onClick} className={`${classes} ${className}`}>
      {left}
      {children}
      {right}
    </button>
  );
};
