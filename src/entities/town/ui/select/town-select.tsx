import { UiSelect } from "@/shared";
import { TownSelectControl } from "./ui";
import { ITown } from "../../models";
import { UiSelectOptionType } from "@/shared/ui/select";

type PropsType = {
  list: ITown[] | null;
};

export const TownSelect = ({ list }: PropsType) => {
  const options = list?.map((li) => {
    const option: UiSelectOptionType = { value: li.name, label: li.name };
    return option;
  });

  return (
    <UiSelect options={options} components={{ Control: TownSelectControl }} />
  );
};
