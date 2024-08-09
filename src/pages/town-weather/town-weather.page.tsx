import { TownInfo, WeatherRecondList } from "@/widgets";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TownWeatherPage: FC = () => {
  const { countryId, townName } = useParams();
  const navigate = useNavigate();

  const handleUpdateCountryId = (newCountryId: string) => {
    navigate(`/${newCountryId}/${townName}`, { replace: true });
  };

  const handleUpdateTownName = (newTownName: string) => {
    navigate(`/${countryId}/${newTownName}`, { replace: true });
  };

  if (countryId && townName)
    return (
      <>
        <TownInfo
          countryId={countryId}
          townName={townName}
          updateCountryId={handleUpdateCountryId}
          updateTownName={handleUpdateTownName}
        />

        <WeatherRecondList />
      </>
    );
};
