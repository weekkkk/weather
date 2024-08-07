import axios from "axios";

const COUNTRY_API_URL = "https://api.api-ninjas.com/v1/country";

const COUNTRY_API_KEY = "Swr1nPY0jbuf3ernbLob2g==6OcxK4Vrz2qPTpUM";

const $country = axios.create({
  baseURL: COUNTRY_API_URL,
  headers: {
    "X-Api-Key": COUNTRY_API_KEY,
  },
});

export { $country };

export type { GetCountryListDto, GetCountryResponseDto } from "./dto";
