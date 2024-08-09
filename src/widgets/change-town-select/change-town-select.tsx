import { FC, useEffect } from "react";
import { TownSelect, ITown } from "@/entities";
import { useRootStore } from "@/app/contexts";
import { observer } from "mobx-react-lite";
import { IChangeTownSelectProps } from "./interfaces";
import { BadRequestError } from "@/shared";

export const ChangeTownSelect: FC<IChangeTownSelectProps> = observer(
  ({ countryId, updateTownName }) => {
    const {
      $town: {
        state,
        actions: { getTownList },
      },
      $country: {
        state: { Country },
      },
    } = useRootStore();

    useEffect(() => {
      if (!state.TownList)
        getTownList(countryId).catch((err) => {
          if (!(err instanceof BadRequestError)) return;
          console.log(err);
        });
    }, [countryId]);

    const handleChange = (newTown: ITown | null) => {
      state.Town = newTown;
      if (newTown) {
        updateTownName(newTown.name);
      }
    };

    return (
      <TownSelect
        country={Country}
        value={state.Town}
        list={state.TownList}
        onChange={handleChange}
      />
    );
  }
);
