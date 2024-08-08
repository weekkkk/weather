import { useRootStore } from "@/app/contexts";
import { BadRequestError, WrapLayout } from "@/shared";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CountryPlaceholder, TownPlaceholder } from "@/entities";

export const TownInfo: FC = observer(() => {
  const navigate = useNavigate();
  const { countryId, townName } = useParams();
  const {
    $country: {
      state: { Country },
      actions: { getCountry, IsLoading: isCountryLoading },
    },
    $town: {
      state: { Town },
      actions: { IsLoading: isTownLoading, getTown },
    },
  } = useRootStore();

  useEffect(() => {
    const getCountryWithPathFix = async (countryIdOrName: string) => {
      try {
        const country = await getCountry(countryIdOrName);
        if (country.id != countryId)
          navigate(`/${country.id}/${townName}`, { replace: true });
      } catch (error) {
        console.log(error);
      }
    };
    const getTownWithPathFix = async () => {
      if (Town || !townName || !countryId) return;
      try {
        const { town, countryName } = await getTown(townName);
        if (town.name != townName)
          navigate(`/${countryId}/${town.name}`, { replace: true });
        if (!Country) {
          await getCountryWithPathFix(countryName);
        }
      } catch (error) {
        if (
          !(error instanceof BadRequestError) ||
          !error.keys.includes("townName") ||
          Country
        )
          return;
        getCountryWithPathFix(countryId);
      }
    };
    getTownWithPathFix();
  }, []);

  if (Country && Town)
    return (
      <WrapLayout>
        <div className="f fd-col">
          <span className="c-brand fw-semi_bold">{Country.name}</span>
          <h1>{Town.name}</h1>
        </div>
      </WrapLayout>
    );
  else if (isCountryLoading) return <CountryPlaceholder isRequest />;
  else if (isTownLoading) return <TownPlaceholder isRequest />;
  else if (!Country) return <CountryPlaceholder />;
  else return <TownPlaceholder />;
});
