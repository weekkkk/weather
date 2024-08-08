import { makeAutoObservable } from "mobx";
import { TownStoreState } from "./town-store.state";
import { TownStoreActions } from "./town-store.actions";

class TownStore {
  state: TownStoreState;
  actions: TownStoreActions;

  constructor() {
    this.state = new TownStoreState();
    this.actions = new TownStoreActions(this.state);
    makeAutoObservable(this);
  }
}

export const townStore = new TownStore();
