import axios from "axios";

const TOWN_API_URL = "https://api.api-ninjas.com/v1/city";

const TOWN_API_KEY = "Swr1nPY0jbuf3ernbLob2g==6OcxK4Vrz2qPTpUM";

const $town = axios.create({
  // withCredentials: true,
  baseURL: TOWN_API_URL,
  headers: {
    "X-Api-Key": TOWN_API_KEY,
  },
});

export { $town };

export type { GetTownListDto, GetTownResponseDto } from "./dto";
