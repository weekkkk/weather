import { FC } from "react";
import { IWeatherRecondListProps } from "./interfaces";
import { WeatherRecordListItem } from "./components";

export const WeatherRecordList: FC<IWeatherRecondListProps> = ({ list }) => {
  return (
    <ul className="f fd-col g-4">
      {list.map((li) => (
        <WeatherRecordListItem key={li.date} {...li} />
      ))}
    </ul>
  );
};
