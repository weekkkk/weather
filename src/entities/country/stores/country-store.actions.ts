import { makeAutoObservable } from "mobx";
import { CountryStoreState } from "./country-store.state";
import { CountryService } from "../services";
import { ICountry } from "../interfaces";
import { BadRequestError } from "@/shared";

export class CountryStoreActions {
  private state: CountryStoreState;
  private service: CountryService;

  private isLoading = false;
  get IsLoading() {
    return this.isLoading;
  }
  private startLoading() {
    this.isLoading = true;
  }
  private stopLoading() {
    this.isLoading = false;
  }

  private getFlagEmojiByCountryCode = (countryCode: string) => {
    const OFFSET = 0x1f1e6;
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => OFFSET + char.charCodeAt(0) - "A".charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  constructor(state: CountryStoreState) {
    this.state = state;
    this.service = new CountryService();
    makeAutoObservable(this);
  }

  getCountryList = async () => {
    if (this.isLoading) return;
    this.startLoading();
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
    } catch (error) {
      console.log(error);
    }
    this.stopLoading();
  };

  getCountry = async (countryId: string) => {
    try {
      if (this.isLoading) throw new Error("Уже идет запрос");
      this.startLoading();
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
      this.stopLoading();
    }
  };
}
