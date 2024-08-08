import { FC } from "react";
import {
  CounrtrySelectFormCountryList,
  CounrtrySelectFormSearch,
} from "./components";

export const CountrySelectForm: FC = () => {
  return (
    <div className="f fd-col g-4">
      <CounrtrySelectFormSearch />
      <CounrtrySelectFormCountryList />
    </div>
  );
};
