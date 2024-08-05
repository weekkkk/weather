import { ChevronDownIcon } from "@/app/assets";
import { components, DropdownIndicatorProps } from "react-select";

export const UiSelectDropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon />
    </components.DropdownIndicator>
  );
};
