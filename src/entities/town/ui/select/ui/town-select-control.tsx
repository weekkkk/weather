import { LocationIcon, SearchIcon } from "@/app/assets";
import { UiButton } from "@/shared/ui";
import { components, ControlProps } from "react-select";
import styles from "./town-select-control.styles.module.scss";
export const TownSelectControl = (props: ControlProps) => {
  return (
    <components.Control {...props}>
      <span style={{ marginLeft: "10px", display: "flex" }}>
        <SearchIcon />
      </span>
      {props.children}
      <span style={{ marginRight: "-4px", display: "flex" }}>
        <UiButton
          className={styles["town_select_control-location_button"]}
          type="second"
          left={<LocationIcon />}
        />
      </span>
    </components.Control>
  );
};
