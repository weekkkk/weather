export interface ITownInfoProps {
  countryId: string;
  townName: string;
  updateCountryId: (newCountryId: string) => void;
  updateTownName: (newTownName: string) => void;
}
