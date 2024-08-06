import { makeAutoObservable } from "mobx";
import { YmapsService } from "../services";
import { GeoObjectCollection } from "../api";

class YmapsStore {
  currentAdress: GeoObjectCollection | null = null;

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentAdress = (adress: GeoObjectCollection) => {
    this.currentAdress = adress;
  };

  getCurrentAdress = (callBack?: (adress: GeoObjectCollection) => void) => {
    if (this.isLoading || this.currentAdress) return;
    this.isLoading = true;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const coords = pos.coords;
        const response = await YmapsService.getAdressByCoordsDto({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });

        callBack?.(response.data.response.GeoObjectCollection);

        this.isLoading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  };

  getTownNameByAddress = (addres: GeoObjectCollection): string => {
    return addres.featureMember[0].GeoObject.name;
  };
}

export const ymapsStore = new YmapsStore();
