import { FC, useEffect } from "react";
import { TownSelectFormTownList, TownSelectFormSearch } from "./components";
import { useRootStore } from "@/app/contexts";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import { CountryPlaceholder } from "@/entities";

export const TownSelectForm: FC = observer(() => {
  const navigate = useNavigate();
  const { countryId } = useParams();
  const {
    $country: {
      state: { Country },
      actions: { getCountry, IsLoading },
    },
  } = useRootStore();

  useEffect(() => {
    if (!Country && countryId)
      getCountry(countryId)
        .then((country) => {
          navigate(`/${country.id}`, { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
  }, [Country, countryId, getCountry, navigate]);

  if (Country)
    return (
      <div className="f fd-col g-4">
        <TownSelectFormSearch country={Country} />
        <TownSelectFormTownList country={Country} />
      </div>
    );
  else if (IsLoading) return <CountryPlaceholder isRequest />;
  else return <CountryPlaceholder />;
});
