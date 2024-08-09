import { makeAutoObservable } from "mobx";
import { IWeatherRecord } from "../interfaces";

export class WeatherStoreState {
  private weatherRecordList: IWeatherRecord[] | null = null;
  get WeatherRecordList() {
    return this.weatherRecordList;
  }
  set WeatherRecordList(newWeatherRecordList: IWeatherRecord[] | null) {
    this.weatherRecordList = newWeatherRecordList;
  }
  constructor() {
    makeAutoObservable(this);
  }
}
