import { ITown } from "@/entities/town/interfaces";

export interface ITownListItemProps extends ITown {
  onClick: () => void;
}
