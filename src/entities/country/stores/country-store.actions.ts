import { makeAutoObservable } from "mobx";
import { CountryStoreState } from "./country-store.state";
import { CountryService } from "../services";
import { ICountry } from "../interfaces";
import { BadRequestError, LoadingError, LoadingService } from "@/shared";

export class CountryStoreActions {
  private state: CountryStoreState;
  private service: CountryService;
  private loading: LoadingService;

  private getFlagEmojiByCountryCode = (countryCode: string) => {
    const OFFSET = 0x1f1e6;
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => OFFSET + char.charCodeAt(0) - "A".charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  getIsLoading = <T extends { name: string }>(func?: T) => {
    return this.loading.getIsLoading(func);
  };

  constructor(state: CountryStoreState) {
    this.state = state;
    this.service = new CountryService();
    this.loading = new LoadingService();
    makeAutoObservable(this);
  }

  getCountryList = async () => {
    if (
      this.loading.getIsLoading(this.getCountryList) ||
      this.state.CountryList?.length
    )
      throw new LoadingError();
    this.loading.startLoading(this.getCountryList);
    try {
      const response = await this.service.getCountryList({ limit: 30 });
      this.state.CountryList = response.data.map((countryResponse) => {
        const { iso2, name } = countryResponse;
        const country: ICountry = {
          id: iso2,
          name: name,
          flagEmoji: this.getFlagEmojiByCountryCode(iso2),
        };
        return country;
      });
    } finally {
      this.loading.stopLoading(this.getCountryList);
    }
  };

  getCountry = async (countryId: string) => {
    if (
      this.loading.getIsLoading(this.getCountry) ||
      this.state.Country?.id == countryId
    )
      throw new LoadingError();
    this.loading.startLoading(this.getCountry);
    try {
      const response = await this.service.getCountry({ name: countryId });

      if (!response.data.length)
        throw new BadRequestError(
          `Не найдено странны c countryId: ${countryId}`,
          "countryId"
        );

      const { iso2, name } = response.data[0];
      const country: ICountry = {
        id: iso2,
        name: name,
        flagEmoji: this.getFlagEmojiByCountryCode(iso2),
      };
      this.state.Country = country;
      return country;
    } finally {
      this.loading.stopLoading(this.getCountry);
    }
  };
}
