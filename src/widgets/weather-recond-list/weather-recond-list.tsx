import { useRootStore } from "@/app/contexts";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { IWeatherRecordListProps } from "./interfaces";

export const WeatherRecondList: FC<IWeatherRecordListProps> = observer(() => {
  const {
    $town: {
      state: { Town },
    },
    $weather: {
      state: { WeatherRecordList },
      actions: { getWeatherRecordList },
    },
  } = useRootStore();

  useEffect(() => {
    if (Town) getWeatherRecordList(Town.name);
  }, [Town]);
  if (Town && WeatherRecordList)
    return (
      <ul>
        {WeatherRecordList.map((el) => (
          <li key={el.date}>{new Date(el.date).toUTCString()}</li>
        ))}
      </ul>
    );
});
