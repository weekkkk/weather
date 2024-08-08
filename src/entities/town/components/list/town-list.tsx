import { FC } from "react";
import cls from "classnames";
import { ITownListProps } from "./interfaces";
import { TownListItem } from "./components";
import { TownListStyles } from "./styles";

export const TownList: FC<ITownListProps> = ({ list, onSelect }) => {
  return (
    <ul className={cls(TownListStyles["town_list"], "f fd-col g-4")}>
      {list.map((item) => (
        <TownListItem
          onClick={() => onSelect(item)}
          key={item.name}
          {...item}
        />
      ))}
    </ul>
  );
};
