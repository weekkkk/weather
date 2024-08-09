export interface IChangeTownSelectProps {
  countryId: string;
  townName: string;
  updateCountryId: (newCountryId: string) => void;
  updateTownName: (newCountryId: string) => void;
}
