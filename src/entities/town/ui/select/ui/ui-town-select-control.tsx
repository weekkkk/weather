import { components, ControlProps } from "react-select";
import { LocationIcon, SearchIcon } from "@/app/assets";
import { UiButton, UiSelectOptionType } from "@/shared";
import styles from "./ui-town-select-control.styles.module.scss";

interface Props extends ControlProps<UiSelectOptionType, false> {
  onLocation: () => void;
}
export const UiTownSelectControl = (props: Props) => {
  return (
    <components.Control {...props}>
      <span style={{ marginLeft: "10px", display: "flex" }}>
        <SearchIcon />
      </span>
      {props.children}
      <span style={{ marginRight: "-4px", display: "flex" }}>
        <UiButton
          onClick={props.onLocation}
          className={styles["town_select_control-location_button"]}
          color="second"
          type="button"
          left={<LocationIcon />}
        />
      </span>
    </components.Control>
  );
};
