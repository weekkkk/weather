import { useRootStore } from "@/app/contexts";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { WeatherRecordList } from "@/entities";

export const WeatherInfo: FC = observer(() => {
  const {
    $town: {
      state: { Town },
    },
    $weather: {
      state: { WeatherRecordList: list },
      actions: { getWeatherRecordList },
    },
  } = useRootStore();

  useEffect(() => {
    if (Town) getWeatherRecordList(Town.name);
  }, [Town]);

  if (Town && list) return <WeatherRecordList list={list} />;
});
