import { makeAutoObservable } from "mobx";
import { TownStoreState } from "./town-store.state";
import { TownService } from "../services";
import { ITown } from "../interfaces";
// import { ITown } from "../interfaces";

export class TownStoreActions {
  private state: TownStoreState;
  private service: TownService;

  private isLoading = false;
  get IsLoading() {
    return this.isLoading;
  }
  private startLoading() {
    this.isLoading = true;
  }
  private stopLoading() {
    this.isLoading = false;
  }

  constructor(state: TownStoreState) {
    this.state = state;
    this.service = new TownService();
    makeAutoObservable(this);
  }

  getTownList = async (countryId: string) => {
    if (this.isLoading) return;
    this.startLoading();
    try {
      const response = await this.service.getList({
        country: countryId,
        limit: 30,
      });
      this.state.TownList = response.data.map((responseTown) => {
        const { name } = responseTown;
        const town: ITown = {
          name,
        };
        return town;
      });
    } catch (error) {
      console.log(error);
    }
    this.stopLoading();
  };
}
