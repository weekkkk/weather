import { ChangeEvent, useRef, useState } from "react";
import styles from "./ui-input.styles.module.scss";
import cls from "classnames";

type PropsType = {
  value: string;
  onChange: (value: string) => void;
  isDisabled?: boolean;
  left?: JSX.Element;
  right?: JSX.Element;
};

export function UiInput({
  value,
  onChange,
  isDisabled,
  left,
  right,
}: PropsType) {
  const $input = useRef<HTMLInputElement>(null);

  const focus = () => {
    if (!isFocused) $input.current?.focus();
  };

  const [isFocused, setIsFocused] = useState(false);

  const classes = cls({
    [styles["ui_input-wrapper-focus"]]: isFocused,
    [styles["ui_input-wrapper-disabled"]]: isDisabled,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div onClick={focus} className={styles["ui_input-wrapper"] + ` ${classes}`}>
      {left}
      <input
        disabled={isDisabled}
        value={value}
        onChange={handleChange}
        ref={$input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={styles["ui_input"]}
      />
      {right}
    </div>
  );
}
