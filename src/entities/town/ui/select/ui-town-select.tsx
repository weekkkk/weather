import { useEffect, useState } from "react";
import { UiSelect, UiSelectOptionType } from "@/shared";
import { ITown } from "../../interfaces";
import { UiTownSelectControl } from "./ui";

type PropsType = {
  value: ITown | null;
  onChange: (newValue: ITown | null) => void;
  list: ITown[] | null;
  onLocation: () => void;
};

export const UiTownSelect = ({
  value,
  onChange,
  onLocation,
  list,
}: PropsType) => {
  const townToOption = (town: ITown) => {
    const option: UiSelectOptionType = { value: town.name, label: town.name };
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
    onChange(newValue && { name: newValue?.value });
  };

  const options = list?.map((li) => townToOption(li));

  return (
    <UiSelect
      value={optionValue}
      onChange={handleChange}
      options={options}
      components={{
        Control: (props) => (
          <UiTownSelectControl {...props} onLocation={onLocation} />
        ),
      }}
    />
  );
};
