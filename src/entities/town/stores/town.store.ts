import { makeAutoObservable } from "mobx";
import { ITown } from "../models";
import { TownServise } from "../services";

class TownStore {
  town: ITown | null = null;
  townList: ITown[] | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setTown = (newTown: ITown | null) => {
    this.town = newTown;
  };

  getTownList = async () => {
    if (this.isLoading) return;

    this.isLoading = true;

    try {
      const response = await TownServise.getList({ country: "MD", limit: 30 });

      this.townList = response.data.map((res) => {
        const town: ITown = { name: res.name };
        return town;
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export const townStore = new TownStore();
