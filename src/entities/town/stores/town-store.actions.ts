import { makeAutoObservable } from "mobx";
import { TownStoreState } from "./town-store.state";
import { TownService } from "../services";
import { ITown } from "../interfaces";
import { BadRequestError, LoadingError, LoadingService } from "@/shared";
// import { ITown } from "../interfaces";

export class TownStoreActions {
  private state: TownStoreState;
  private service: TownService;
  private loading: LoadingService;

  getIsLoading = <T extends { name: string }>(func?: T) => {
    return this.loading.getIsLoading(func);
  };

  constructor(state: TownStoreState) {
    this.state = state;
    this.service = new TownService();
    this.loading = new LoadingService();
    makeAutoObservable(this);
  }

  getTownList = async (countryId: string) => {
    if (this.loading.getIsLoading(this.getTownList)) throw new LoadingError();
    this.loading.startLoading(this.getTownList);
    try {
      const response = await this.service.getList({
        country: countryId,
        limit: 30,
      });
      this.state.TownList = Array.from(
        new Map(
          response.data.map((responseTown) => [responseTown.name, responseTown])
        ).values()
      ).map((responseTown) => {
        const { name } = responseTown;
        const town: ITown = {
          name,
        };
        return town;
      });
    } finally {
      this.loading.stopLoading(this.getTownList);
    }
  };

  getTown = async (townName: string) => {
    if (this.loading.getIsLoading(this.getTown)) throw new LoadingError();
    this.loading.startLoading(this.getTown);
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
    } finally {
      this.loading.stopLoading(this.getTown);
    }
  };
}
