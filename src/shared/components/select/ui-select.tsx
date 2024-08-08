import Select, { StylesConfig, Props } from "react-select";
import { UiSelectDropdownIndicator } from "./ui";
import { UiSelectOptionType } from "./types";

export const UiSelect = (props: Props<UiSelectOptionType, false>) => {
  const styles: StylesConfig<UiSelectOptionType> = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: `0 0 0 1px ${state.isFocused ? "#0019ff" : "#8d8d8d"}`,
      padding: "0 4px 0 2px",
      borderRadius: "12px",
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  return (
    <Select<UiSelectOptionType, false>
      {...props}
      styles={styles}
      components={{
        ...props.components,
        DropdownIndicator: UiSelectDropdownIndicator,
      }}
    />
  );
};
