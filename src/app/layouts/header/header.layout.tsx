import { ChangeCountrySelect, ChangeTownSelect } from "@/widgets";
import { LogoIcon } from "../../assets";
import { HeaderLayoutStyles } from "./styles";
import cls from "classnames";
import { useNavigate, useParams } from "react-router-dom";

export const HeaderLayout = () => {
  const { countryId, townName } = useParams();
  const navigate = useNavigate();

  const handleUpdateCountryId = (newCountryId: string) => {
    if (townName) navigate(`/${newCountryId}/${townName}`, { replace: true });
    else navigate(`/${newCountryId}`, { replace: true });
  };

  const handleUpdateTownName = (newTownName: string) => {
    navigate(`/${countryId}/${newTownName}`, { replace: true });
  };

  const countrySelect = countryId ? (
    <ChangeCountrySelect
      countryId={countryId}
      updateCountryId={handleUpdateCountryId}
    />
  ) : undefined;
  const townSelect =
    countryId && townName ? (
      <ChangeTownSelect
        countryId={countryId}
        townName={townName}
        updateTownName={handleUpdateTownName}
      />
    ) : undefined;

  return (
    <header
      className={cls(
        HeaderLayoutStyles["header_layout"],
        "bg-default py-2 px-4_5 f ai-c jc-sb"
      )}
    >
      <div className="f g-3">
        {countrySelect}
        {townSelect}
      </div>

      <LogoIcon height={48} />
    </header>
  );
};
