export interface IChangeCountrySelectProps {
  countryId: string;
  townName?: string;
  updateCountryId: (newCountryId: string) => void;
}
