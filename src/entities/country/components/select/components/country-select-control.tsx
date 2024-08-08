import { components, ControlProps } from "react-select";
import { SearchIcon } from "@/app/assets";
import { UiSelectOptionType } from "@/shared";
// import styles from "./ui-country-select-control.styles.module.scss";

interface Props extends ControlProps<UiSelectOptionType, false> {
  onLocation?: () => void;
}
export const CountrySelectControl = (props: Props) => {
  return (
    <components.Control {...props}>
      <span style={{ marginLeft: "10px", display: "flex" }}>
        <SearchIcon />
      </span>
      {props.children}
      {/* <span style={{ marginRight: "-4px", display: "flex" }}>
        <UiButton
          onClick={props.onLocation}
          className={styles["country_select_control-location_button"]}
          color="second"
          type="button"
          left={<LocationIcon />}
        />
      </span> */}
    </components.Control>
  );
};
