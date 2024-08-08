import { ChangeCountrySelect } from "@/widgets";
import { LogoIcon } from "../../assets";
import { HeaderLayoutStyles } from "./styles";
import cls from "classnames";

export const HeaderLayout = () => {
  return (
    <header
      className={cls(
        HeaderLayoutStyles["header_layout"],
        "bg-default py-2 px-4_5 f ai-c jc-sb"
      )}
    >
      <div>
        <ChangeCountrySelect />
      </div>

      <LogoIcon height={48} />
    </header>
  );
};
