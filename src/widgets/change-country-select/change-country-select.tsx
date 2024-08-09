import { FC, useEffect } from "react";
import { CountrySelect, ICountry } from "@/entities";
import { useRootStore } from "@/app/contexts";
import { observer } from "mobx-react-lite";
import { IChangeCountrySelectProps } from "./interfaces";
import { BadRequestError } from "@/shared";

export const ChangeCountrySelect: FC<IChangeCountrySelectProps> = observer(
  ({ countryId, updateCountryId }) => {
    const {
      $country: {
        state,
        actions: { getCountryList },
      },
      $town,
    } = useRootStore();

    useEffect(() => {
      if (!state.CountryList)
        getCountryList().catch((err) => {
          if (!(err instanceof BadRequestError)) return;
          console.log(err);
        });
    }, [countryId]);

    const handleChange = (newCountry: ICountry | null) => {
      state.Country = newCountry;
      $town.state.TownList = null;
      $town.state.Town = null;
      updateCountryId(newCountry?.id || "");
    };

    return (
      <CountrySelect
        value={state.Country}
        list={state.CountryList}
        onChange={handleChange}
      />
    );
  }
);
