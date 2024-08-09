import { ChangeCountrySelect, ChangeTownSelect } from "@/widgets";
import { LogoIcon } from "../../assets";
import { HeaderLayoutStyles } from "./styles";
import cls from "classnames";
import { useNavigate, useParams } from "react-router-dom";

export const HeaderLayout = () => {
  const { countryId, townName } = useParams();
  const navigate = useNavigate();

  const handleUpdateCountryId = (newCountryId: string) => {
    console.log({ newCountryId });
    navigate(`/${newCountryId}/${townName}`, { replace: true });
  };

  const handleUpdateTownName = (newTownName: string) => {
    console.log({ newTownName });

    navigate(`/${countryId}/${newTownName}`, { replace: true });
  };
  if (countryId && townName)
    return (
      <header
        className={cls(
          HeaderLayoutStyles["header_layout"],
          "bg-default py-2 px-4_5 f ai-c jc-sb"
        )}
      >
        <div className="f g-3">
          <ChangeCountrySelect
            countryId={countryId}
            townName={townName}
            updateCountryId={handleUpdateCountryId}
          />

          <ChangeTownSelect
            countryId={countryId}
            townName={townName}
            updateCountryId={handleUpdateCountryId}
            updateTownName={handleUpdateTownName}
          />
        </div>

        <LogoIcon height={48} />
      </header>
    );
};
