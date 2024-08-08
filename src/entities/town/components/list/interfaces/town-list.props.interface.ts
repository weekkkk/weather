import { ITown } from "@/entities/town/interfaces";

export interface ITownListProps {
  list: ITown[];
  onSelect: (town: ITown) => void;
}
