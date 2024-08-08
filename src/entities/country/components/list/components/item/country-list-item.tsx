import { WrapLayout } from "@/shared";
import { FC } from "react";
import { ICountryListItemProps } from "./interfaces";

export const CountryListItem: FC<ICountryListItemProps> = ({
  id,
  name,
  flagEmoji,
  onClick,
}) => {
  return (
    <li onClick={onClick}>
      <WrapLayout>
        <div className="f jc-sb ai-c">
          <div className="f fd-col">
            <h1>{name}</h1>
            <span className="fw-medium c-brand fw-semi_bold">{id}</span>
          </div>

          <span
            style={{
              fontSize: "calc((var(--w-fs-h1) * 2) / 1.25)",
              lineHeight: 1.25,
            }}
          >
            {flagEmoji}
          </span>
        </div>
      </WrapLayout>
    </li>
  );
};
