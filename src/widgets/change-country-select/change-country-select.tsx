import { FC, useEffect } from "react";
import { CountrySelect, ICountry } from "@/entities";
import { useRootStore } from "@/app/contexts";
import { observer } from "mobx-react-lite";
import { IChangeCountrySelectProps } from "./interfaces";
import { BadRequestError, LoadingError } from "@/shared";

export const ChangeCountrySelect: FC<IChangeCountrySelectProps> = observer(
  ({ countryId, updateCountryId }) => {
    const {
      $country: {
        state,
        actions: { getCountryList, getCountry },
      },
      $town,
    } = useRootStore();

    useEffect(() => {
      const initCountry = async (initCountryId: string) => {
        const { Country } = state;
        if (Country?.id == initCountryId) throw new Error();
        const country = await getCountry(initCountryId);
        return country;
      };
      const initCountryList = async () => {
        await getCountryList();
      };
      const init = async () => {
        console.log({ countryId });

        const country = await initCountry(countryId);
        console.log({ country });
        await initCountryList();
      };

      init().catch((err) => {
        if (err instanceof LoadingError) {
          console.log(err.message, countryId);
        } else if (err instanceof BadRequestError) {
          console.log(err.message, countryId);
        }
      });
    }, [countryId]);

    const handleChange = (newCountry: ICountry | null) => {
      state.Country = newCountry;
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
