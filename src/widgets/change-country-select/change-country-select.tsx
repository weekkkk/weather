import { FC, useEffect } from "react";
import { CountrySelect, ICountry } from "@/entities";
import { useRootStore } from "@/app/contexts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { LoadingError } from "@/shared";

export const ChangeCountrySelect: FC = observer(() => {
  const {
    $country: {
      state,
      actions: { getCountryList },
    },
  } = useRootStore();

  useEffect(() => {
    getCountryList().catch((error) => {
      if (!(error instanceof LoadingError)) console.log(error);
    });
  }, []);

  const navigate = useNavigate();

  const handleChange = (newCountry: ICountry | null) => {
    state.Country = newCountry;
    if (newCountry) {
      navigate(`/${newCountry.id}`, { replace: true });
    }
  };

  return (
    <CountrySelect
      value={state.Country}
      list={state.CountryList}
      onChange={handleChange}
    />
  );
});
