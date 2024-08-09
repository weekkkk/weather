import { FC } from "react";
import { IWeatherRecordListItemProps } from "./interfaces";
import { WrapLayout } from "@/shared";

export const WeatherRecordListItem: FC<IWeatherRecordListItemProps> = ({
  date,
  description,
  humidity,
  temp,
}) => {
  const innerDate = new Date(date);

  const getNumSrt = (num: number) => {
    const str = num <= 9 ? `0${num}` : num + "";
    return str;
  };

  const dateStr = `${getNumSrt(innerDate.getUTCDate())}.${getNumSrt(
    innerDate.getUTCMonth()
  )}`;

  const timeStr = `${getNumSrt(innerDate.getUTCHours())}:${getNumSrt(
    innerDate.getUTCMinutes()
  )}`;

  const tempStr = temp > 0 ? "+" + Math.round(temp) : Math.round(temp) + "";

  return (
    <li className="f">
      <WrapLayout>
        <div className="f fd-col g-3">
          <h1 className="c-brand">{tempStr}</h1>
          <h2>{description}</h2>
          <span>Влажность: {humidity}%</span>
          <div className="f ai-c jc-sb">
            <h2 className="c-brand">{timeStr}</h2>
            <h2 className="ta-r">{dateStr}</h2>
          </div>
        </div>
      </WrapLayout>
    </li>
  );
};
