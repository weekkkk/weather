import { FC } from "react";
import cls from "classnames";
import { ICountryListProps } from "./interfaces";
import { CountryListItem } from "./components";
import { CountryListStyles } from "./styles";

export const CountryList: FC<ICountryListProps> = ({ list, onSelect }) => {
  return (
    <ul className={cls(CountryListStyles["country_list"], "f fd-col g-4")}>
      {list.map((item) => (
        <CountryListItem
          onClick={() => onSelect(item)}
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  );
};
