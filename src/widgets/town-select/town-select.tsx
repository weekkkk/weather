import { useRootStore } from "@/app/contexts";
import { UiTownSelect } from "@/entities";
import { GeoObjectCollection } from "@/entities/ymaps/api";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

export const TownSelect = observer(() => {
  const {
    $town: { getTownList, townList, town, setTown },
    $ymaps: { getCurrentAdress, getTownNameByAddress },
  } = useRootStore();

  useEffect(() => {
    getTownList();
  }, [getTownList]);

  const handleLocation = () => {
    getCurrentAdress((adress: GeoObjectCollection) => {
      const name = getTownNameByAddress(adress);
      setTown({ name });
    });
  };

  return (
    <div>
      <UiTownSelect
        value={town}
        onChange={setTown}
        onLocation={handleLocation}
        list={townList}
      />
      {JSON.stringify(town)}
    </div>
  );
});
