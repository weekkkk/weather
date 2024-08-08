import { makeAutoObservable } from "mobx";
import { ITown } from "../interfaces";

export class TownStoreState {
  private townList: ITown[] | null = null;
  get TownList() {
    return this.townList;
  }
  set TownList(newList: ITown[] | null) {
    this.townList = newList;
  }
  get FilteredTownList() {
    return this.townList?.filter((town) => {
      return town.name
        .toLowerCase()
        .includes(this.townSearchName.toLowerCase());
    });
  }

  private townSearchName: string = "";
  get TownSearchName() {
    return this.townSearchName;
  }
  set TownSearchName(newSearchName: string) {
    this.townSearchName = newSearchName;
  }

  private town: ITown | null = null;
  get Town() {
    return this.town;
  }
  set Town(newTown: ITown | null) {
    this.town = newTown;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
