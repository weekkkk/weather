import { RefreshCircleIcon } from "@/app/assets";
import { WrapLayout } from "@/shared";
import { FC } from "react";

export const TownSelectFormTownListLoadingPlaceholder: FC = () => {
  return (
    <WrapLayout>
      <div className="f fd-col g-3">
        <div className="f ai-c g-3">
          <span className="f c-brand">
            <RefreshCircleIcon size={48} />
          </span>
          <h1>Получение городов</h1>
        </div>
        <p className="fw-medium">На запрос нужно немного времени</p>
      </div>
    </WrapLayout>
  );
};
