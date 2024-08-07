import { countryStore } from "@/entities";
import { townStore } from "@/entities/town";
import { ymapsStore } from "@/entities/ymaps/stores";
export class RootStore {
  readonly $country = countryStore;
  readonly $town = townStore;
  readonly $ymaps = ymapsStore;
}
