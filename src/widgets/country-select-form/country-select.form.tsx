import { FC } from "react";
import {
  CounrtrySelectFormCountryList,
  CounrtrySelectFormSearch,
} from "./components";
import { observer } from "mobx-react-lite";

export const CountrySelectForm: FC = observer(() => {
  return (
    <div className="f fd-col g-4">
      <CounrtrySelectFormSearch />
      <CounrtrySelectFormCountryList />
    </div>
  );
});
