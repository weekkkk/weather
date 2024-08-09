import { FC, useEffect, useState } from "react";
import { UiSelect, UiSelectOptionType } from "@/shared";
import { ITown } from "../../interfaces";
import { TownSelectControl } from "./components";
import { ICountry } from "@/entities/country";

type PropsType = {
  value: ITown | null;
  onChange: (newValue: ITown | null) => void;
  list: ITown[] | null;
  onLocation?: () => void;
  country: ICountry | null;
};

export const TownSelect: FC<PropsType> = ({
  value,
  list,
  onChange,
  country,
}) => {
  const townToOption = (town: ITown) => {
    const option: UiSelectOptionType = {
      value: town.name,
      label: town.name,
    };
    return option;
  };

  const [optionValue, setOptionValue] = useState<UiSelectOptionType | null>(
    null
  );

  useEffect(() => {
    setOptionValue(value && townToOption(value));
  }, [value]);

  const handleChange = (newValue: UiSelectOptionType | null) => {
    setOptionValue(newValue);
    onChange(
      newValue && {
        name: newValue.label,
      }
    );
  };

  const options = list?.map((li) => townToOption(li));

  return (
    <UiSelect
      isDisabled={!country}
      value={optionValue}
      onChange={handleChange}
      options={options}
      components={{
        Control: (props) => <TownSelectControl {...props} />,
      }}
    />
  );
};
