import { ArrowLeftIcon, InfoCircleIcon } from "@/app/assets";
import { UiButton, WrapLayout } from "@/shared";
import { FC } from "react";

export const TownInfoNoTownPlaceholder: FC = () => {
  return (
    <WrapLayout>
      <div className="f fd-col g-3">
        <div className="f ai-c g-3">
          <span className="f c-brand">
            <InfoCircleIcon size={48} />
          </span>
          <h1>Город не найден</h1>
        </div>
        <p className="fw-medium">
          Измените параметр в строке поиска на название или города или вернитесь
          к выбору города
        </p>

        <UiButton left={<ArrowLeftIcon />}>К выбору города</UiButton>
      </div>
    </WrapLayout>
  );
};
