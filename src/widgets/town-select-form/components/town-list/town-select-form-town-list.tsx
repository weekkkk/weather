import { useRootStore } from "@/app/contexts";
import { TownList, ITown, TownPlaceholder } from "@/entities";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ITownSelectFormTownListProps } from "./interfaces";
import { LoadingError } from "@/shared";

export const TownSelectFormTownList: FC<ITownSelectFormTownListProps> =
  observer(({ country }) => {
    const {
      $town: {
        state,
        actions: { getTownList, getIsLoading },
      },
    } = useRootStore();
    const { FilteredTownList: list } = state;

    const navigate = useNavigate();

    useEffect(() => {
      getTownList(country.id).catch((error) => {
        if (!(error instanceof LoadingError)) console.log(error);
      });
    }, [country]);

    const handleSelect = (town: ITown) => {
      state.Town = town;
      navigate(`${town.name}`);
    };

    if (getIsLoading(getTownList)) return <TownPlaceholder isList isRequest />;
    else if (!list?.length) return <TownPlaceholder isList />;
    return <TownList onSelect={handleSelect} list={list} />;
  });
