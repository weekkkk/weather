import { countryStore, townStore, weatherStore, ymapsStore } from "@/entities";
export class RootStore {
  readonly $weather = weatherStore;
  readonly $country = countryStore;
  readonly $town = townStore;
  readonly $ymaps = ymapsStore;
}
