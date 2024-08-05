import { makeAutoObservable } from "mobx";
import { YmapsService } from "../services";

class YmapsStore {
  currentAdress: object | null = null;

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCurrentAdress = (callBack?: (adress: object) => void) => {
    if (this.isLoading) return;
    this.isLoading = true;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const coords = pos.coords;
        const response = await YmapsService.getAdressByCoordsDto({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });

        this.currentAdress = response.data;

        callBack?.(response.data);

        this.isLoading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export const ymapsStore = new YmapsStore();
