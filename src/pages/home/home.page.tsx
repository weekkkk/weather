import { useRootStore } from "@/app/contexts";
// import { LogoIcon } from "@/assets";
import { UiInput, UiSelect } from "@/shared";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import Select from "react-select";

export const HomePage = observer(() => {
  const {
    $town: { getTownList },
  } = useRootStore();

  useEffect(() => {
    getTownList();
  }, [getTownList]);

  const [value, setValue] = useState("test");

  return (
    <div>
      <Select></Select>
      <img height={50} src="" alt="" />
      <UiSelect />
      <UiInput
        value={value}
        onChange={(newValue: string) => setValue(newValue)}
      />
      {value}
    </div>
  );
});
