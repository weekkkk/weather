import { RefreshCircleIcon } from "@/app/assets";
import { FC } from "react";
import { LoaderStyles } from "./styles";

export const Loader: FC = () => {
  return (
    <span className={LoaderStyles["loader"]}>
      <RefreshCircleIcon size={48} />
    </span>
  );
};
