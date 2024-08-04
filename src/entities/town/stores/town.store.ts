import { makeAutoObservable } from "mobx";
import { ITown } from "../models";
import { TownServise } from "../services";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

class TownStore {
  townList?: IPromiseBasedObservable<ITown[]>;

  constructor() {
    makeAutoObservable(this);
  }

  getTownList = () => {
    this.townList = fromPromise(
      TownServise.getList({ country: "RU", limit: 30 })
    );
  };
}

export const townStore = new TownStore();
