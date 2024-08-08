import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@/app/contexts";
import { UiButton, UiInput, WrapLayout } from "@/shared";
import { ArrowLeftIcon, SearchIcon } from "@/app/assets";
import { ITownSelectFormSearchProps } from "./interfaces";
import { useNavigate } from "react-router-dom";

export const TownSelectFormSearch: FC<ITownSelectFormSearchProps> = observer(
  ({ country }) => {
    const navigate = useNavigate();
    const {
      $town: {
        state,
        actions: { IsLoading },
      },
    } = useRootStore();

    const handleBack = () => {
      navigate("/");
    };

    return (
      <WrapLayout>
        <div className="f fd-col g-3">
          <div className="f g-3">
            <UiButton
              onClick={handleBack}
              left={<ArrowLeftIcon />}
              color="second"
            />
            <div>
              <span className="c-brand fw-semi_bold">{country.name}</span>
              <h1>Выберите город</h1>
            </div>
          </div>

          <UiInput
            isDisabled={IsLoading || !state.TownList?.length}
            left={<SearchIcon />}
            value={state.TownSearchName}
            onChange={(newValue) => (state.TownSearchName = newValue)}
          />
        </div>
      </WrapLayout>
    );
  }
);
