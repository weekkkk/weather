import { useRootStore } from "@/app/contexts";
import { BadRequestError, WrapLayout } from "@/shared";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { CountryPlaceholder, TownPlaceholder } from "@/entities";
import { ITownInfoProps } from "./interfaces";

export const TownInfo: FC<ITownInfoProps> = observer(
  ({ countryId, updateCountryId, townName, updateTownName }) => {
    const {
      $country: {
        state: { Country },
        actions: { getCountry, getIsLoading: getIsCountryLoading },
      },
      $town: {
        state: { Town },
        actions: { getTown, getIsLoading: getIsTownLoading },
      },
    } = useRootStore();

    useEffect(() => {
      if (!Town) {
        getTown(townName)
          .then(({ townCountryId, town }) => {
            if (town.name != townName) updateTownName(town.name);
            if (townCountryId != countryId) updateCountryId(townCountryId);
            if (!Country || Country.id != townCountryId) {
              getCountry(townCountryId);
            }
          })
          .catch((err) => {
            if (!(err instanceof BadRequestError)) return;
            if (err.keys.includes("townName") && !Country)
              getCountry(countryId);
          });
      }
    }, [townName]);

    if (Country && Town)
      return (
        <WrapLayout>
          <div className="f fd-col">
            <span className="c-brand fw-semi_bold">{Country.name}</span>
            <h1>{Town.name}</h1>
          </div>
        </WrapLayout>
      );
    else if (getIsCountryLoading(getCountry))
      return <CountryPlaceholder isRequest />;
    else if (getIsTownLoading(getTown)) return <TownPlaceholder isRequest />;
    else if (!Country) return <CountryPlaceholder />;
    else return <TownPlaceholder />;
  }
);
