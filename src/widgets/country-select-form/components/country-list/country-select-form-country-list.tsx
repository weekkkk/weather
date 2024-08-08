import { useRootStore } from "@/app/contexts";
import { CountryList, CountryPlaceholder, ICountry } from "@/entities";
import { LoadingError } from "@/shared";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CounrtrySelectFormCountryList: FC = observer(() => {
  const {
    $country: {
      state,
      actions: { getCountryList, getIsLoading },
    },
  } = useRootStore();
  const { FilteredCountryList: list } = state;

  const navigate = useNavigate();

  useEffect(() => {
    getCountryList().catch((error) => {
      if (!(error instanceof LoadingError)) console.log(error);
    });
  }, [getCountryList]);

  const handleSelect = (country: ICountry) => {
    state.Country = country;
    navigate(`/${country.id}`);
  };

  if (list?.length) return <CountryList onSelect={handleSelect} list={list} />;
  else if (getIsLoading(getCountryList))
    return <CountryPlaceholder isRequest isList />;
  else return <CountryPlaceholder isList />;
});
