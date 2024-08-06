import { useRootStore } from "@/app/contexts";
import { UiTownSelect } from "@/entities";
import { GeoObjectCollection } from "@/entities/ymaps/api";
import { FC, FormEvent, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { ITown } from "@/entities/town/models";
import { UiAllert, UiButton } from "@/shared/ui";
import { ArrowCircleRightIcon } from "@/app/assets";
import styles from "./select-town-form.styles.module.scss";
import { InfoCircleIcon } from "@/app/assets/icons/info-circle.icon";
import { NavigateFunction, useNavigate } from "react-router-dom";

type SelectTownFormPropsType = {
  callBack: (navigate: NavigateFunction) => void;
};

export const SelectTownForm: FC<SelectTownFormPropsType> = observer(
  ({ callBack }) => {
    const {
      $town: { getTownList, townList, town, setTown },
      $ymaps: { getCurrentAdress, setCurrentAdress, getTownNameByAddress },
    } = useRootStore();

    const navigate = useNavigate();

    const [townValue, setTownValue] = useState<ITown | null>(town);

    useEffect(() => {
      getTownList();
    }, [getTownList]);

    const handleLocation = () => {
      getCurrentAdress((adress: GeoObjectCollection) => {
        setCurrentAdress(adress);
        const name = getTownNameByAddress(adress);
        handleChange({ name });
      });
    };

    const handleChange = (newValue: ITown | null) => {
      setTownValue(newValue);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!townValue) return;
      setTown(townValue);
      callBack(navigate);
    };

    return (
      <form onSubmit={onSubmit} className={styles["select_town_form"]}>
        <h1 className={styles["select_town_form-title"]}>Выберите город</h1>

        <UiTownSelect
          value={townValue}
          onChange={handleChange}
          list={townList}
          onLocation={handleLocation}
        />

        <UiAllert left={<InfoCircleIcon />}>
          Найдите город с помощью поиска или выберите свое текущее расположение
        </UiAllert>

        <UiButton
          disabled={!townValue}
          type="submit"
          right={<ArrowCircleRightIcon />}
        >
          К погоде
        </UiButton>
      </form>
    );
  }
);
