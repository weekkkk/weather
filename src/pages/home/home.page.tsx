import { useRootStore } from "@/app/contexts";
import { TownSelect } from "@/entities";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const HomePage = observer(() => {
  const {
    $town: { getTownList, townList },
    $ymaps: { getCurrentAdress },
  } = useRootStore();

  useEffect(() => {
    getTownList();
    getCurrentAdress();
  }, [getTownList, getCurrentAdress]);

  return (
    <div>
      <TownSelect list={townList} />
    </div>
  );
});
