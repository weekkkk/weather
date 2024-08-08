import { makeAutoObservable } from "mobx";
import { TownStoreState } from "./town-store.state";
import { TownService } from "../services";
import { ITown } from "../interfaces";
import { BadRequestError } from "@/shared";
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

  getTown = async (townName: string) => {
    if (this.isLoading) throw new Error("Уже идет запрос");
    this.startLoading();
    try {
      const response = await this.service.getOne({
        name: townName,
      });

      if (!response.data.length)
        throw new BadRequestError(
          `Неверное значение townName: ${townName}`,
          "townName"
        );

      const { name, country } = response.data[0];
      const town: ITown = {
        name,
      };
      this.state.Town = town;
      return { town, countryName: country };
    } catch (error) {
      console.log();
      throw error;
    } finally {
      this.stopLoading();
    }
  };
}
