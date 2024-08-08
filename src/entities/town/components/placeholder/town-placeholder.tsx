import { Loader, Placeholder, UiButton, WrapLayout } from "@/shared";
import { FC } from "react";
import { ICountryPlaceholderProps } from "./interfaces";
import { ArrowLeftIcon, InfoCircleIcon, RefreshCircleIcon } from "@/app/assets";

export const TownPlaceholder: FC<ICountryPlaceholderProps> = ({
  isList = false,
  isRequest = false,
}) => {
  const icon = isRequest ? <Loader /> : <InfoCircleIcon size={48} />;

  const getStrByFlags = (...cases: string[]) => {
    return isList
      ? isRequest
        ? cases[0]
        : cases[1]
      : isRequest
      ? cases[2]
      : cases[3];
  };

  const title = getStrByFlags(
    "Получение городов",
    "Города не найдены",
    "Получение города",
    "Город не найдена"
  );
  const text = getStrByFlags(
    "На получение городов нужно немного времени",
    "Повторите запрос",
    "На получение города нужно немного времени",
    "Измените параметр в строке поиска или вернитесь к выбору города"
  );

  const action = !isRequest ? (
    isList ? (
      <UiButton left={<RefreshCircleIcon />}>Повторить запрос</UiButton>
    ) : (
      <UiButton left={<ArrowLeftIcon />}>К выбору города</UiButton>
    )
  ) : undefined;

  return (
    <WrapLayout>
      <Placeholder {...{ icon, title }}>
        <>
          <p className="fw-medium">{text}</p>
          {action}
        </>
      </Placeholder>
    </WrapLayout>
  );
};
