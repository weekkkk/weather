import { makeAutoObservable } from "mobx";
import { ITown } from "../models";
import { TownServise } from "../services";

class TownStore {
  townList: ITown[] | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getTownList = async () => {
    if (this.isLoading) return;

    this.isLoading = true;

    try {
      const response = await TownServise.getList({ country: "RU", limit: 30 });

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
