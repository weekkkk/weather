import { ICountry } from "@/entities/country/interfaces";

export interface ICountryListItemProps extends ICountry {
  onClick: () => void;
}
