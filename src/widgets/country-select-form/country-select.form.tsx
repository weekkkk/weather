import { FC } from "react";
import {
  CounrtrySelectFormCoutryList,
  CounrtrySelectFormSearch,
} from "./components";

export const CountrySelectForm: FC = () => {
  return (
    <div className="f fd-col g-4">
      <CounrtrySelectFormSearch />
      <CounrtrySelectFormCoutryList />
    </div>
  );
};
