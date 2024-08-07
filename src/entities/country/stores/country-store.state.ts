import { makeAutoObservable } from "mobx";
import { ICountry } from "../interfaces";

export class CountryStoreState {
  private countryList: ICountry[] | null = null;
  get CountryList() {
    return this.countryList;
  }
  set CountryList(newList: ICountry[] | null) {
    this.countryList = newList;
  }
  get FilteredCountryList() {
    return this.countryList?.filter((country) => {
      return country.name
        .toLowerCase()
        .includes(this.countrySearchName.toLowerCase());
    });
  }

  private countrySearchName: string = "";
  get CountrySearchName() {
    return this.countrySearchName;
  }
  set CountrySearchName(newSearchName: string) {
    this.countrySearchName = newSearchName;
  }

  private country: ICountry | null = null;
  get Country() {
    return this.country;
  }
  set Country(country: ICountry | null) {
    this.country = country;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
