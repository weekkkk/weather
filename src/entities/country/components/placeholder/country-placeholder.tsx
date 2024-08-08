import { Loader, Placeholder, UiButton, WrapLayout } from "@/shared";
import { FC } from "react";
import { ICountryPlaceholderProps } from "./interfaces";
import { ArrowLeftIcon, InfoCircleIcon, RefreshCircleIcon } from "@/app/assets";

export const CountryPlaceholder: FC<ICountryPlaceholderProps> = ({
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
    "Получение стран",
    "Cтраны не найдены",
    "Получение страны",
    "Cтрана не найдена"
  );
  const text = getStrByFlags(
    "На получение стран нужно немного времени",
    "Повторите запрос",
    "На получение страны нужно немного времени",
    "Измените параметр в строке поиска или вернитесь к выбору страны"
  );

  const action = !isRequest ? (
    isList ? (
      <UiButton left={<RefreshCircleIcon />}>Повторить запрос</UiButton>
    ) : (
      <UiButton left={<ArrowLeftIcon />}>К выбору страны</UiButton>
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
