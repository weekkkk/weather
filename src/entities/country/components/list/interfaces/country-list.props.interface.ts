import { ICountry } from "@/entities/country/interfaces";

export interface ICountryListProps {
  list: ICountry[];
  onSelect: (country: ICountry) => void;
}
