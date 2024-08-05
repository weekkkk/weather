import { $ymaps, GetAdressByCoordsDto } from "../api";

export class YmapsService {
  static getAdressByCoordsDto({ latitude, longitude }: GetAdressByCoordsDto) {
    return $ymaps.get("/", {
      params: { geocode: `${longitude},${latitude}` },
    });
  }
}
