import { makeAutoObservable } from "mobx";
import { WeatherStoreState } from "./weather-store.state";
import { WeatherStoreActions } from "./weather-store.actions";

class WeatherStore {
  state: WeatherStoreState;
  actions: WeatherStoreActions;

  constructor() {
    this.state = new WeatherStoreState();
    this.actions = new WeatherStoreActions(this.state);
    makeAutoObservable(this);
  }
}

export const weatherStore = new WeatherStore();
