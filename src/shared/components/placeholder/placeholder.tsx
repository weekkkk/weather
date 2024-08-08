import { FC } from "react";
import { IPlaceholderProps } from "./interfaces";

export const Placeholder: FC<IPlaceholderProps> = ({
  icon,
  children,
  title,
}) => {
  return (
    <div className="f fd-col g-3">
      <div className="f ai-c g-3">
        <span className="f c-brand">{icon}</span>
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
};
