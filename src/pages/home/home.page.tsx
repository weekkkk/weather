import { useRootStore } from "@/app/contexts";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const HomePage = observer(() => {
  const {
    $town: { getTownList },
  } = useRootStore();

  useEffect(() => {
    getTownList();
  }, []);

  return <h1>test</h1>;
});
