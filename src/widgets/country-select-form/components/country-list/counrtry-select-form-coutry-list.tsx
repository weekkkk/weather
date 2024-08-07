import { useRootStore } from "@/app/contexts";
import { CoutryList, ICountry } from "@/entities";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CounrtrySelectFormCoutryList: FC = observer(() => {
  const {
    $country: {
      state,
      actions: { getCountryList: getList, IsLoading },
    },
  } = useRootStore();
  const { FilteredCountryList: list } = state;

  const navigate = useNavigate();

  useEffect(() => {
    getList();
  }, [getList]);

  const handleSelect = (country: ICountry) => {
    state.Country = country;
    navigate(`/${country.id}`);
  };

  if (list?.length) return <CoutryList onSelect={handleSelect} list={list} />;
  else if (IsLoading) return <h1>Получаем страны...</h1>;
  else return <h1>Стран нет...</h1>;
});
