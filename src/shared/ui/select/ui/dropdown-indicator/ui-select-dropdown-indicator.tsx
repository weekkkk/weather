import { ChevronDownIcon } from "@/assets";
import { components, DropdownIndicatorProps } from "react-select";

export const UiSelectDropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon />
    </components.DropdownIndicator>
  );
};
