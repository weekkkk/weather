import { townStore } from "@/entities/town";
import { ymapsStore } from "@/entities/ymaps/stores";
export class RootStore {
  readonly $town = townStore;
  readonly $ymaps = ymapsStore;
}
