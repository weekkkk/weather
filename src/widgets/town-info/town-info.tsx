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
        actions: { getIsLoading: getIsTownLoading, getTown },
      },
    } = useRootStore();

    useEffect(() => {
      const initTown = async () => {
        if (Town?.name == townName) throw new Error();
        const { town, countryId: townCountryId } = await getTown(townName);
        return { town, townCountryId };
      };
      const initCountry = async (initCountryId: string) => {
        if (Country?.id == initCountryId) throw new Error();
        const country = await getCountry(initCountryId);
        return country;
      };
      const init = async () => {
        try {
          const { townCountryId, town } = await initTown();
          if (town.name != townName) updateTownName(town.name);
          if (townCountryId != countryId) updateCountryId(countryId);
          const country = await initCountry(townCountryId);
          console.log({ country });
        } catch (err) {
          if (!(err instanceof BadRequestError)) return;
          if (err.keys.includes("townName")) {
            const country = await initCountry(countryId);
            if (countryId != country.id) updateCountryId(countryId);
          }
        }
      };
      init().catch((err) => {
        if (!(err instanceof BadRequestError)) return;
        console.log(err.message);
      });
    }, [countryId, townName]);

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
