import { makeAutoObservable } from "mobx";
import { CountryStoreActions } from "./country-store.actions";
import { CountryStoreState } from "./country-store.state";

class CountryStore {
  state: CountryStoreState;
  actions: CountryStoreActions;

  constructor() {
    this.state = new CountryStoreState();
    this.actions = new CountryStoreActions(this.state);
    makeAutoObservable(this);
  }
}

export const countryStore = new CountryStore();
