import { FC, useEffect, useState } from "react";
import { UiSelect, UiSelectOptionType } from "@/shared";
import { ICountry } from "../../interfaces";
import { CountrySelectControl } from "./components";

type PropsType = {
  value: ICountry | null;
  onChange: (newValue: ICountry | null) => void;
  list: ICountry[] | null;
  onLocation?: () => void;
};

export const CountrySelect: FC<PropsType> = ({ value, list, onChange }) => {
  const countryToOption = (country: ICountry) => {
    const option: UiSelectOptionType = {
      value: country.id,
      label: country.name,
      icon: country.flagEmoji,
    };
    return option;
  };

  const [optionValue, setOptionValue] = useState<UiSelectOptionType | null>(
    null
  );

  useEffect(() => {
    setOptionValue(value && countryToOption(value));
  }, [value]);

  const handleChange = (newValue: UiSelectOptionType | null) => {
    setOptionValue(newValue);
    onChange(
      newValue && {
        name: newValue.label,
        id: newValue.value,
        flagEmoji: newValue.icon || "",
      }
    );
  };

  const options = list?.map((li) => countryToOption(li));

  return (
    <UiSelect
      value={optionValue}
      onChange={handleChange}
      options={options}
      components={{
        Control: (props) => <CountrySelectControl {...props} />,
      }}
    />
  );
};
