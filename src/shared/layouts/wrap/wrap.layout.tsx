import { FC } from "react";
import { WrapLayoutPropsInterface } from "./interfaces";
import { WrapLayoutStyles } from "./styles";

export const WrapLayout: FC<WrapLayoutPropsInterface> = ({
  children,
  width = 560,
}) => {
  return (
    <div
      className={`${WrapLayoutStyles["wrap_layout"]} f fd-col bg-default py-3 px-4_5 br-3`}
      style={{
        width,
      }}
    >
      {children}
    </div>
  );
};
