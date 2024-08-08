import { ChevronDownIcon } from "@/app/assets";
import { components, DropdownIndicatorProps } from "react-select";
import { UiSelectOptionType } from "../../types";

export const UiSelectDropdownIndicator: React.FC<
  DropdownIndicatorProps<UiSelectOptionType, false>
> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon />
    </components.DropdownIndicator>
  );
};
