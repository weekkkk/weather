import { makeAutoObservable, runInAction } from "mobx";
import { WeatherStoreState } from "./weather-store.state";
import { WeatherService } from "../services";
import { LoadingError, LoadingService } from "@/shared";
import { GeocodingService } from "@/entities/geocoding";
import { IWeatherRecord } from "../interfaces";

export class WeatherStoreActions {
  private state: WeatherStoreState;
  private service: WeatherService;
  private geocoding: GeocodingService;
  private loading: LoadingService;

  getIsLoading = <T extends { name: string }>(func?: T) => {
    return this.loading.getIsLoading(func);
  };

  constructor(state: WeatherStoreState) {
    this.state = state;
    this.service = new WeatherService();
    this.geocoding = new GeocodingService();
    this.loading = new LoadingService();
    makeAutoObservable(this);
  }

  getWeatherRecordList = async (townName: string) => {
    const { getIsLoading, startLoading, stopLoading } = this.loading;
    const func = this.getWeatherRecordList;

    if (getIsLoading(func)) throw new LoadingError();
    startLoading(func);

    const geoRes = await this.geocoding.getTownLanAndLat({
      q: townName,
      limit: 1,
    });
    const { lat, lon } = geoRes.data[0];
    const weatherRes = await this.service.getWeather({ lat, lon });

    const weatherRecords: IWeatherRecord[] = weatherRes.data.list.map((li) => {
      const weatherRecord: IWeatherRecord = {
        date: li.dt * 1000,
        description: li.weather[0].description,
        humidity: li.main.humidity,
        temp: li.main.temp,
      };
      return weatherRecord;
    });

    runInAction(() => {
      this.state.WeatherRecordList = weatherRecords;
      stopLoading(func);
    });
  };
}
