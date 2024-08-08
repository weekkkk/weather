import { FC } from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "@/app/contexts";
import { UiInput, WrapLayout } from "@/shared";
import { SearchIcon } from "@/app/assets";

export const CounrtrySelectFormSearch: FC = observer(() => {
  const {
    $country: {
      state,
      actions: { getIsLoading },
    },
  } = useRootStore();

  return (
    <WrapLayout>
      <div className="f fd-col g-3">
        <h1>Выберите страну</h1>

        <UiInput
          isDisabled={getIsLoading() || !state.CountryList?.length}
          left={<SearchIcon />}
          value={state.CountrySearchName}
          onChange={(newValue) => (state.CountrySearchName = newValue)}
        />
      </div>
    </WrapLayout>
  );
});
