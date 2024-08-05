import { useRootStore } from "@/app/contexts";
import { TownSelect } from "@/entities";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const HomePage = observer(() => {
  const {
    $town: { getTownList, townList },
  } = useRootStore();

  useEffect(() => {
    getTownList();
  }, [getTownList]);

  return (
    <div>
      <TownSelect list={townList} />
    </div>
  );
});
