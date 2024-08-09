import { FC, useEffect } from "react";
import { TownSelect, ITown } from "@/entities";
import { useRootStore } from "@/app/contexts";
import { observer } from "mobx-react-lite";
import { IChangeTownSelectProps } from "./interfaces";
import { BadRequestError } from "@/shared";

export const ChangeTownSelect: FC<IChangeTownSelectProps> = observer(
  ({ countryId, updateCountryId, townName, updateTownName }) => {
    const {
      $town: {
        state,
        actions: { getTownList, getTown },
      },
      $country: {
        state: { Country },
        actions: { getCountry },
      },
    } = useRootStore();

    useEffect(() => {
      const initTown = async () => {
        const { Town } = state;
        if (Town?.name == townName) throw new Error();
        const { town, countryId: townCountryId } = await getTown(townName);
        return { town, townCountryId };
      };
      const initTownList = async (initCountryId: string) => {
        await getTownList(initCountryId);
      };

      const init = async () => {
        try {
          const { townCountryId, town } = await initTown();
          if (town.name != townName) updateTownName(town.name);
          if (townCountryId != countryId) updateCountryId(townCountryId);
          await initTownList(townCountryId);
        } catch (err) {
          if (!(err instanceof BadRequestError)) return;
          if (err.keys.includes("townName")) {
            console.log({ err });

            await initTownList(countryId);
          }
        }
      };

      init().catch((err) => {
        if (!(err instanceof BadRequestError)) return;
        console.log(err.message);
      });
    }, [townName]);

    const handleChange = (newTown: ITown | null) => {
      state.Town = newTown;
      if (newTown) {
        updateCountryId(newTown.name);
      }
    };

    return (
      <TownSelect
        value={state.Town}
        list={state.TownList}
        onChange={handleChange}
      />
    );
  }
);
