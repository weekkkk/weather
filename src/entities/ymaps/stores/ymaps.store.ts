import { makeAutoObservable } from "mobx";
import { YmapsService } from "../services";
import { GeoObjectCollection } from "../api";

class YmapsStore {
  currentAdress: GeoObjectCollection | null = null;

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

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

        this.currentAdress = response.data.response.GeoObjectCollection
          .GeoObjectCollection as GeoObjectCollection;

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
