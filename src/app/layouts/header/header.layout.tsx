import { LogoIcon } from "../../assets";
import { HeaderLayoutStyles } from "./styles";
import cls from "classnames";

export const HeaderLayout = () => {
  return (
    <header
      className={cls(
        HeaderLayoutStyles["header_layout"],
        "bg-default py-2 px-4_5 f ai-c jc-fe"
      )}
    >
      <LogoIcon height={48} />
    </header>
  );
};
