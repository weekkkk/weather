import { useRootStore } from "@/app/contexts";
import { TownList, ITown, TownPlaceholder } from "@/entities";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ITownSelectFormTownListProps } from "./interfaces";

export const TownSelectFormTownList: FC<ITownSelectFormTownListProps> =
  observer(({ country }) => {
    const {
      $town: {
        state,
        actions: { getTownList: getList, IsLoading },
      },
    } = useRootStore();
    const { FilteredTownList: list } = state;

    const navigate = useNavigate();

    useEffect(() => {
      getList(country.id);
    }, [getList, country.id]);

    const handleSelect = (town: ITown) => {
      state.Town = town;
      navigate(`${town.name}`);
    };

    if (list?.length) return <TownList onSelect={handleSelect} list={list} />;
    else if (IsLoading) return <TownPlaceholder isList isRequest />;
    else return <TownPlaceholder isList />;
  });
