import { ChangeEvent, useRef, useState } from "react";
import styles from "./ui-input.styles.module.scss";
import cls from "classnames";

type PropsType = {
  value: string;
  onChange: (value: string) => void;
  left?: JSX.Element;
  right?: JSX.Element;
};

export function UiInput({ value, left, right, onChange }: PropsType) {
  const $input = useRef<HTMLInputElement>(null);

  const focus = () => {
    if (!isFocused) $input.current?.focus();
  };

  const [isFocused, setIsFocused] = useState(false);

  const classes = cls({
    [styles["ui_input-wrapper-focus"]]: isFocused,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div onClick={focus} className={styles["ui_input-wrapper"] + ` ${classes}`}>
      {left}
      <input
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
