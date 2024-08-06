import { FC } from "react";
import { observer } from "mobx-react-lite";
import { GlobeIcon, LocationIcon } from "@/app/assets";
import { useRootStore } from "@/app/contexts";
import { UiButton } from "@/shared";
import styles from "./town-row.styles.module.scss";

export const TownRow: FC = observer(() => {
  const {
    $town: { town },
  } = useRootStore();

  console.log("render");

  if (town)
    return (
      <section className={styles["town_row"]}>
        <div className={styles["town_row-title"]}>
          <LocationIcon />
          <h1>{town.name}</h1>
        </div>

        <UiButton left={<GlobeIcon />}>Сменить город</UiButton>
      </section>
    );
  return (
    <section className={styles["town_row"]}>
      <UiButton left={<GlobeIcon />}>Выбрать город</UiButton>
    </section>
  );
});
